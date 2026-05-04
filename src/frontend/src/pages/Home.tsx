import { Skeleton } from "@/components/ui/skeleton";
import { COUNTRY_META, getCountryMeta } from "@/constants/countries";
import { useCarImages } from "@/hooks/use-car-images";
import { useAllCars } from "@/hooks/use-cars";
import type { Car, Country } from "@/types/car";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { Car as CarIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo } from "react";

type FilterType = "all" | Country;

function CountryPlaceholder({
  car,
  countryColor,
}: {
  car: Car;
  countryColor: string;
}) {
  return (
    <div
      className="relative h-36 flex flex-col items-center justify-center gap-2 overflow-hidden px-3"
      style={{ background: `${countryColor}22` }}
    >
      {/* gradient blob */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at 60% 40%, ${countryColor} 0%, transparent 70%)`,
        }}
      />
      <CarIcon
        size={32}
        className="relative z-10 opacity-60"
        style={{ color: countryColor }}
      />
      <p className="relative z-10 text-center text-[10px] font-body leading-snug px-1 line-clamp-3 opacity-75 text-foreground">
        {car.imagePrompt.split(",").slice(0, 3).join(",")}
      </p>
    </div>
  );
}

function CarCard({
  car,
  imageUrl,
  index,
}: {
  car: Car;
  imageUrl: string | undefined;
  index: number;
}) {
  const meta = getCountryMeta(car.country);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{
        delay: Math.min(index * 0.045, 0.45),
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      data-ocid={`cars.item.${index + 1}`}
      className="group"
    >
      <Link
        to="/$carId"
        params={{ carId: car.id.toString() }}
        data-ocid={`cars.card.${index + 1}`}
        className={`block bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-smooth hover:-translate-y-2 hover:scale-[1.02] border-2 border-transparent ${meta.cardClass} cursor-pointer`}
      >
        {/* Country banner */}
        <div
          className={`${meta.badgeClass} px-3 py-2 flex items-center gap-1.5`}
        >
          <span className="text-base">{meta.emoji}</span>
          <span className="font-display font-extrabold text-xs tracking-wider uppercase">
            {meta.label} Машин
          </span>
        </div>

        {/* Image or placeholder */}
        {imageUrl ? (
          <div className="relative bg-muted/20 h-36 flex items-center justify-center overflow-hidden">
            <img
              src={imageUrl}
              alt={car.name}
              className="w-full h-full object-contain p-2 group-hover:scale-105 transition-smooth"
            />
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-smooth" />
          </div>
        ) : (
          <CountryPlaceholder car={car} countryColor={meta.bgHex} />
        )}

        {/* Info */}
        <div className="p-3 pb-4">
          <p className="font-display font-extrabold text-[15px] leading-tight text-foreground line-clamp-2 mb-0.5">
            {car.nickname}
          </p>
          <p className="font-body text-[11px] text-muted-foreground line-clamp-1 italic">
            &ldquo;{car.name}&rdquo;
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function HomePage() {
  const navigate = useNavigate({ from: "/" });
  // Read country from URL search params
  const search = useSearch({ from: "/" });
  const activeFilter: FilterType = (search.country as FilterType) ?? "all";

  const { data: cars = [], isLoading } = useAllCars();
  const { getAllImages } = useCarImages();
  const images = getAllImages();

  const filtered = useMemo(() => {
    if (activeFilter === "all") return cars;
    return cars.filter((c) => c.country === activeFilter);
  }, [cars, activeFilter]);

  function setFilter(f: FilterType) {
    if (f === "all") {
      navigate({ search: { country: undefined } });
    } else {
      navigate({ search: { country: f } });
    }
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 py-6">
      {/* Filter tabs */}
      <div
        className="flex flex-wrap gap-2 mb-8"
        role="tablist"
        aria-label="Улс орноор шүүх"
      >
        {/* All tab */}
        <button
          type="button"
          role="tab"
          aria-selected={activeFilter === "all"}
          onClick={() => setFilter("all")}
          data-ocid="filter.all_tab"
          className={`px-5 py-2.5 rounded-full font-display font-extrabold text-sm transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2 ${
            activeFilter === "all"
              ? "bg-primary text-primary-foreground shadow-elevated scale-105"
              : "bg-muted text-muted-foreground hover:bg-primary/20 hover:scale-105"
          }`}
        >
          🏎️ Бүгд
        </button>

        {/* Country tabs */}
        {COUNTRY_META.map((cm) => (
          <button
            key={cm.key}
            type="button"
            role="tab"
            aria-selected={activeFilter === cm.key}
            onClick={() => setFilter(cm.key)}
            data-ocid={`filter.${cm.key.toLowerCase()}_tab`}
            className={`px-5 py-2.5 rounded-full font-display font-extrabold text-sm transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2 ${
              activeFilter === cm.key
                ? `${cm.badgeClass} shadow-elevated scale-105`
                : "bg-muted text-muted-foreground hover:scale-105 hover:bg-muted/80"
            }`}
          >
            {cm.emoji} {cm.label}
          </button>
        ))}
      </div>

      {/* Results count */}
      {!isLoading && (
        <p className="font-body text-sm text-muted-foreground mb-4">
          {filtered.length === 0
            ? "Машин олдсонгүй"
            : `${filtered.length} машин олдсон`}
        </p>
      )}

      {/* Grid */}
      {isLoading ? (
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          data-ocid="cars.loading_state"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: skeleton
            <Skeleton key={i} className="h-56 rounded-3xl" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-24 gap-4"
          data-ocid="cars.empty_state"
        >
          <span className="text-7xl">🚗</span>
          <p className="font-display font-extrabold text-xl text-foreground">
            Машин олдсонгүй
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Өөр улс сонгоно уу
          </p>
          <button
            type="button"
            onClick={() => setFilter("all")}
            className="mt-2 px-6 py-2.5 rounded-full font-display font-bold text-sm bg-primary text-primary-foreground shadow-card hover:shadow-elevated transition-smooth hover:-translate-y-0.5"
            data-ocid="cars.show_all_button"
          >
            Бүгд харах
          </button>
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filtered.map((car, idx) => (
              <CarCard
                key={car.id.toString()}
                car={car}
                imageUrl={images[car.id.toString()]}
                index={idx}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
