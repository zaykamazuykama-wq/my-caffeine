import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getCountryMeta } from "@/constants/countries";
import { useCarImages } from "@/hooks/use-car-images";
import { useCarById } from "@/hooks/use-cars";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Camera,
  CheckCircle2,
  ImageIcon,
  RefreshCw,
  Trash2,
} from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useRef, useState } from "react";

export default function CarDetailPage() {
  const { carId } = useParams({ from: "/$carId" });
  const id = BigInt(carId);
  const { data: car, isLoading } = useCarById(id);
  const { getImage, setImage, removeImage } = useCarImages();
  const [imageUrl, setImageUrl] = useState<string | undefined>(() =>
    getImage(id),
  );
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setImage(id, base64);
        setImageUrl(base64);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 2500);
      };
      reader.readAsDataURL(file);
    },
    [id, setImage],
  );

  const handleRemoveImage = useCallback(() => {
    removeImage(id);
    setImageUrl(undefined);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, [id, removeImage]);

  const triggerUpload = () => fileInputRef.current?.click();

  // ── Loading ──────────────────────────────────────────────
  if (isLoading) {
    return (
      <div
        className="container max-w-2xl mx-auto px-4 py-8 space-y-4"
        data-ocid="car_detail.loading_state"
      >
        <Skeleton className="h-8 w-24 rounded-full" />
        <Skeleton className="h-72 rounded-3xl" />
        <Skeleton className="h-10 w-56" />
        <Skeleton className="h-6 w-36" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-24 rounded-full" />
          <Skeleton className="h-8 w-24 rounded-full" />
          <Skeleton className="h-8 w-24 rounded-full" />
        </div>
        <Skeleton className="h-28 rounded-2xl" />
      </div>
    );
  }

  // ── 404 ─────────────────────────────────────────────────
  if (!car) {
    return (
      <div
        className="container max-w-2xl mx-auto px-4 py-20 flex flex-col items-center gap-5"
        data-ocid="car_detail.error_state"
      >
        <span className="text-8xl">🚗</span>
        <h2 className="font-display font-extrabold text-2xl text-foreground">
          Машин олдсонгүй
        </h2>
        <p className="font-body text-muted-foreground text-center">
          Уг машин байхгүй эсвэл буруу холбоос байна.
        </p>
        <Link to="/" data-ocid="car_detail.back_button">
          <Button variant="default" className="rounded-full px-6">
            <ArrowLeft size={16} className="mr-1.5" /> Нүүр хуудас руу буцах
          </Button>
        </Link>
      </div>
    );
  }

  const meta = getCountryMeta(car.country);

  // ── Feature chip colors — semantic design tokens ───────
  const chipColors = [
    "bg-primary/10 text-primary",
    "bg-accent/10 text-accent-foreground",
    "bg-secondary/30 text-secondary-foreground",
    "bg-muted text-muted-foreground",
    "bg-primary/15 text-primary",
    "bg-accent/20 text-accent-foreground",
  ];

  return (
    <div
      className="container max-w-2xl mx-auto px-4 py-6"
      data-ocid="car_detail.page"
    >
      {/* Back breadcrumb */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Link to="/" data-ocid="car_detail.back_link">
          <Button
            variant="ghost"
            size="sm"
            className="mb-5 -ml-2 rounded-full font-body font-semibold hover:bg-muted transition-smooth"
          >
            <ArrowLeft size={16} className="mr-1.5" />
            Буцах
          </Button>
        </Link>
      </motion.div>

      {/* Main flashcard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="bg-card rounded-[2rem] overflow-hidden shadow-elevated border-2 border-border"
      >
        {/* Country banner */}
        <div
          className={`${meta.badgeClass} px-6 py-3.5 flex items-center gap-3`}
        >
          <span className="text-2xl">{meta.emoji}</span>
          <span className="font-display font-extrabold text-base tracking-widest uppercase">
            {meta.label} машин
          </span>
        </div>

        {/* Hero image area */}
        <div className="relative bg-muted/20 min-h-64 flex items-center justify-center overflow-hidden">
          {imageUrl ? (
            <motion.img
              key={imageUrl}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={imageUrl}
              alt={car.name}
              className="w-full max-h-72 object-contain p-4"
            />
          ) : (
            <div className="flex flex-col items-center gap-3 py-10 text-muted-foreground">
              <div className="w-20 h-20 rounded-full bg-muted/40 flex items-center justify-center">
                <ImageIcon size={36} strokeWidth={1.2} />
              </div>
              <p className="font-body text-sm font-medium">Зургаа нэмээрэй</p>
            </div>
          )}

          {/* Upload success toast */}
          {uploadSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-3 right-3 flex items-center gap-1.5 bg-card rounded-full px-3 py-1.5 shadow-card border border-border"
              data-ocid="car_detail.success_state"
            >
              <CheckCircle2 size={15} className="text-primary" />
              <span className="text-xs font-body font-semibold">
                Хадагаллаа!
              </span>
            </motion.div>
          )}
        </div>

        {/* Car info */}
        <div className="p-6 space-y-6">
          {/* Name + nickname */}
          <div>
            <h1 className="font-display font-extrabold text-3xl leading-tight text-foreground">
              {car.name}
            </h1>
            <p className="font-body text-lg text-muted-foreground mt-1 italic">
              &ldquo;{car.nickname}&rdquo;
            </p>
            {/* Country badge */}
            <span
              className={`inline-flex items-center gap-1.5 mt-3 rounded-full px-3.5 py-1 text-sm font-display font-bold ${meta.badgeClass}`}
              data-ocid="car_detail.country_badge"
            >
              {meta.emoji} {meta.label}
            </span>
          </div>

          {/* Upload controls */}
          <div className="flex items-center gap-2 flex-wrap">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              data-ocid="car_detail.upload_button"
            />
            {imageUrl ? (
              <>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={triggerUpload}
                  className="rounded-full font-body font-semibold gap-1.5 transition-smooth"
                  data-ocid="car_detail.replace_image_button"
                >
                  <RefreshCw size={14} />
                  Зураг солих
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={handleRemoveImage}
                  className="rounded-full font-body font-semibold gap-1.5 text-destructive hover:text-destructive transition-smooth"
                  data-ocid="car_detail.delete_button"
                >
                  <Trash2 size={14} />
                  Устгах
                </Button>
              </>
            ) : (
              <Button
                type="button"
                size="sm"
                onClick={triggerUpload}
                className={`rounded-full font-body font-bold gap-2 ${meta.badgeClass} border-0 shadow-card hover:opacity-90 transition-smooth`}
                data-ocid="car_detail.upload_image_button"
              >
                <Camera size={15} />
                Зураг оруулах
              </Button>
            )}
          </div>

          {/* Identifying features section */}
          <div data-ocid="car_detail.features_list">
            <h2 className="font-display font-extrabold text-sm uppercase tracking-widest text-muted-foreground mb-3">
              🔍 Онцлог шинжүүд
            </h2>
            <div className="flex flex-wrap gap-2">
              {car.identifyingFeatures.map((feature, i) => (
                <motion.span
                  key={feature}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06, duration: 0.2 }}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-body font-semibold ${
                    chipColors[i % chipColors.length]
                  }`}
                  data-ocid={`car_detail.feature.${i + 1}`}
                >
                  <Badge
                    className={`${meta.badgeClass} w-5 h-5 p-0 text-[10px] font-extrabold flex items-center justify-center rounded-full shrink-0`}
                  >
                    {i + 1}
                  </Badge>
                  {feature}
                </motion.span>
              ))}
            </div>
          </div>

          {/* AI Image Prompt section */}
          <div data-ocid="car_detail.prompt_section">
            <h2 className="font-display font-extrabold text-sm uppercase tracking-widest text-muted-foreground mb-3">
              🤖 AI Зургийн Промпт
            </h2>
            <div className="bg-muted/30 border border-border rounded-2xl p-4 relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 w-1 rounded-l-2xl"
                style={{ background: meta.bgHex }}
              />
              <p className="font-mono text-xs text-muted-foreground leading-relaxed pl-3 whitespace-pre-wrap break-words">
                {car.imagePrompt}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom spacer */}
      <div className="h-8" />
    </div>
  );
}
