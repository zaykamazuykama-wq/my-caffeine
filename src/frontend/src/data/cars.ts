import type { Car } from "@/types/car";

export const SEEDED_CARS: Car[] = [
  // Japan — 12 cars
  {
    id: 1n,
    name: "Toyota Prius 30",
    nickname: "Өндөг",
    country: "Japan",
    identifyingFeatures: [
      "Дугуй зөөлөн биетэй",
      "Гурвалжин гэрэлтэй",
      "Босоо чиглэлийн ар гэрэл",
    ],
    imagePrompt:
      "Simple colorful vector illustration of 2010 Toyota Prius 30, front 3/4 view, smooth egg-shaped hatchback, rounded triangular headlights, vertical taillights. White background, child-friendly flashcard style.",
  },
  {
    id: 2n,
    name: "Toyota Prius 40",
    nickname: "Сум",
    country: "Japan",
    identifyingFeatures: [
      "Хурц өнцөгтэй биетэй",
      "Нарийн сумны нүдтэй гэрэл",
      "Босоо өдрийн гэрэл",
    ],
    imagePrompt:
      "Simple colorful vector illustration of 2016 Toyota Prius 40, front 3/4 view, sharp angular body, arrow-slit headlights, vertical DRL. White background, child-friendly flashcard style.",
  },
  {
    id: 3n,
    name: "Toyota Prius 50",
    nickname: "Сансрын хөлөг",
    country: "Japan",
    identifyingFeatures: [
      "Бага өргөн тавцантай",
      "Нарийн жижиг нүдтэй гэрэл",
      "Бүтэн өргөн ар гэрэл",
    ],
    imagePrompt:
      "Simple colorful vector illustration of 2020 Toyota Prius 50, front 3/4 view, low wide stance, tiny squinting headlights, full-width rear light bar. White background, child-friendly flashcard style.",
  },
  {
    id: 4n,
    name: "Toyota Prius Alpha",
    nickname: "7-ын Хүчтэй",
    country: "Japan",
    identifyingFeatures: [
      "Өндөр хамрын шалантай",
      "Prius 30-тай ижил царайтай",
      "7 суудалтай",
    ],
    imagePrompt:
      "Simple colorful vector illustration of Toyota Prius Alpha MPV, front 3/4 view, taller boxier rear, small hump on back, same face as Prius 30 but taller roofline. White background, child-friendly flashcard style.",
  },
  {
    id: 5n,
    name: "Toyota Aqua",
    nickname: "Жижигхэн Улаан",
    country: "Japan",
    identifyingFeatures: [
      "Жижиг дугуй биетэй",
      "Таван хаалгатай",
      "Найрсаг царайтай",
    ],
    imagePrompt:
      "Simple colorful vector illustration of Toyota Aqua small hybrid hatchback, front 3/4 view, compact round body, 5 doors, friendly small face. White background, child-friendly flashcard style.",
  },
  {
    id: 6n,
    name: "Toyota Land Cruiser 100",
    nickname: "Хүчит Заан",
    country: "Japan",
    identifyingFeatures: [
      "Том дугуй биетэй",
      "Тэгш өнцөгт шилэн гэрэл",
      "Хүчирхэг бамперт",
    ],
    imagePrompt:
      "Simple colorful vector illustration of 2004 Toyota Land Cruiser 100 SUV, front 3/4 view, large rounded body, big rectangular glass headlights, solid bumper. White background, child-friendly flashcard style.",
  },
  {
    id: 7n,
    name: "Toyota Land Cruiser 200",
    nickname: "Төмөр Халим",
    country: "Japan",
    identifyingFeatures: [
      "Том квадрат биетэй",
      "Дээшээ сунасан гэрэл",
      "Хром тортэй решеткэтэй",
    ],
    imagePrompt:
      "Simple colorful vector illustration of 2015 Toyota Land Cruiser 200 SUV, front 3/4 view, massive boxy body, headlights stretching upward, large chrome grille bars. White background, child-friendly flashcard style.",
  },
  {
    id: 8n,
    name: "Toyota Land Cruiser 300",
    nickname: "Шидэт Халим",
    country: "Japan",
    identifyingFeatures: [
      "Аварга хэмжээний тортэй решеткэ",
      "Жижиг квадрат гэрэл",
      "Орчин үеийн хурц шугам",
    ],
    imagePrompt:
      "Simple colorful vector illustration of 2022 Toyota Land Cruiser 300 SUV, front 3/4 view, enormous rectangular grille like huge mouth, small squarish headlights, sharp lines. White background, child-friendly flashcard style.",
  },
  {
    id: 9n,
    name: "Toyota Corolla",
    nickname: "Гоёмсог",
    country: "Japan",
    identifyingFeatures: [
      "Урт нам биетэй",
      "Хурц тортэй решеткэ",
      "Динамик гэрэл",
    ],
    imagePrompt:
      "Simple colorful vector illustration of 2020 Toyota Corolla sedan, front 3/4 view, long sleek low body, aggressive sharp grille and headlights. White background, child-friendly flashcard style.",
  },
  {
    id: 10n,
    name: "Toyota Camry",
    nickname: "Тансаг Халим",
    country: "Japan",
    identifyingFeatures: [
      "Өргөн доод решеткэ",
      "Нам өргөн тавцантай",
      "Зүүн нарийн гэрэл",
    ],
    imagePrompt:
      "Simple colorful vector illustration of 2021 Toyota Camry sedan, front 3/4 view, very wide lower grille like large mouth, sleek headlights, low wide stance. White background, child-friendly flashcard style.",
  },
  {
    id: 11n,
    name: "Toyota Harrier",
    nickname: "Шонхор",
    country: "Japan",
    identifyingFeatures: [
      "Хурц дам урт хамартай",
      "Нарийн дээшилсэн гэрэл",
      "Coupe маягийн дээвэртэй",
    ],
    imagePrompt:
      "Simple colorful vector illustration of 2020 Toyota Harrier SUV, front 3/4 view, sharp pointed nose angled down, narrow upswept headlights, coupe-like roofline. White background, child-friendly flashcard style.",
  },
  {
    id: 12n,
    name: "Toyota Vitz",
    nickname: "Хулгана",
    country: "Japan",
    identifyingFeatures: [
      "Маш жижиг дугуй биетэй",
      "Том дусал хэлбэрийн гэрэл",
      "Дугуй ар хэсэгтэй",
    ],
    imagePrompt:
      "Simple colorful vector illustration of 2010 Toyota Vitz hatchback, front 3/4 view, very small cute round body, big friendly teardrop headlights, round rear. White background, child-friendly flashcard style.",
  },
  // Korea — 3 cars
  {
    id: 13n,
    name: "Hyundai Porter",
    nickname: "Ажилсаг Шоргоолж",
    country: "Korea",
    identifyingFeatures: [
      "Хавтгай кабинтай",
      "Нээлттэй ачааны хайрцагтай",
      "Жижиг хамрын",
    ],
    imagePrompt:
      "Simple colorful vector illustration of Hyundai Porter small truck, front 3/4 view, flat cab nose, open cargo bed with low sides. White background, child-friendly flashcard style.",
  },
  {
    id: 14n,
    name: "Hyundai Grand Starex",
    nickname: "Гэр Бүст",
    country: "Korea",
    identifyingFeatures: [
      "Өндөр хайрцаг хэлбэртэй",
      "Том цонхнуудтай",
      "Гулгадаг хажуу хаалгатай",
    ],
    imagePrompt:
      "Simple colorful vector illustration of Hyundai Grand Starex van, front 3/4 view, tall boxy shape, large windows all around, sliding side door. White background, child-friendly flashcard style.",
  },
  {
    id: 15n,
    name: "Hyundai Tucson",
    nickname: "Хотын Барс",
    country: "Korea",
    identifyingFeatures: [
      "Нам компакт биетэй",
      "Хурц шугамтай",
      "Геометрийн загвартай том решеткэ",
    ],
    imagePrompt:
      "Simple colorful vector illustration of modern Hyundai Tucson SUV, front 3/4 view, compact low body, sharp lines, cascading front grille with geometric pattern. White background, child-friendly flashcard style.",
  },
  // Russia — 1 car
  {
    id: 16n,
    name: "UAZ Patriot",
    nickname: "Орос Баатар",
    country: "Russia",
    identifyingFeatures: [
      "Маш квадрат цэргийн хэлбэртэй",
      "Дугуй гэрэлтэй",
      "Хүнд металл бамперт",
    ],
    imagePrompt:
      "Simple colorful vector illustration of UAZ Patriot SUV, front 3/4 view, very boxy military-like shape, round headlights, heavy metal bumper, flat panels. White background, child-friendly flashcard style.",
  },
  // Germany — 5 cars
  {
    id: 17n,
    name: "Mercedes-Benz G-Class",
    nickname: "Хүчит Хайрцаг",
    country: "Germany",
    identifyingFeatures: [
      "Бүрэн хавтгай квадрат биетэй",
      "Дугуй гэрэлтэй",
      "Хавтгай шилтэй",
    ],
    imagePrompt:
      "Simple colorful vector illustration of 2020 Mercedes G-Class SUV, front 3/4 view, completely flat square body, round headlights, flat windshield. White background, child-friendly flashcard style.",
  },
  {
    id: 18n,
    name: "BMW X5",
    nickname: "Аюу",
    country: "Germany",
    identifyingFeatures: [
      "Том тэгш боссон бөөрний решеткэ",
      "Нарийн гэрэлтэй",
      "Том цонхнуудтай",
    ],
    imagePrompt:
      "Simple colorful vector illustration of 2020 BMW X5 SUV, front 3/4 view, large upright kidney grille, sleek headlights, large greenhouse windows. White background, child-friendly flashcard style.",
  },
  {
    id: 19n,
    name: "BMW X6",
    nickname: "Аюу бөгтөр",
    country: "Germany",
    identifyingFeatures: [
      "X5-тай ижил царайтай",
      "Огцом налсан дээвэртэй",
      "Спорт дугуй шугамтай",
    ],
    imagePrompt:
      "Simple colorful vector illustration of 2020 BMW X6 coupe-SUV, front 3/4 view, same face as X5 but dramatically sloping roof at back, sporty silhouette. White background, child-friendly flashcard style.",
  },
  {
    id: 20n,
    name: "Audi Q7",
    nickname: "Нэг Нүдэн",
    country: "Germany",
    identifyingFeatures: [
      "Том нэг хүрээний решеткэ",
      "Matrix LED гэрэл",
      "Хурц технологийн гэрэлтэй",
    ],
    imagePrompt:
      "Simple colorful vector illustration of 2021 Audi Q7 SUV, front 3/4 view, large singleframe grille, sharp high-tech matrix headlights with distinct LED signature. White background, child-friendly flashcard style.",
  },
  {
    id: 21n,
    name: "Volkswagen Touareg",
    nickname: "Чоно",
    country: "Germany",
    identifyingFeatures: [
      "Өргөн хэвтээ шугамтай",
      "Хром баартай энгийн решеткэ",
      "Тайван хүндэтгэлтэй царайтай",
    ],
    imagePrompt:
      "Simple colorful vector illustration of 2021 VW Touareg SUV, front 3/4 view, wide plain horizontal lines, elegant grille with chrome bars, calm dignified face. White background, child-friendly flashcard style.",
  },
  // UK — 2 cars
  {
    id: 22n,
    name: "Range Rover",
    nickname: "Хаан Титэм",
    country: "UK",
    identifyingFeatures: [
      "Хавтгай дэвдэг дээвэртэй",
      "Хөвөгч дээврийн загвар",
      "RANGE ROVER бичигтэй решеткэ",
    ],
    imagePrompt:
      "Simple colorful vector illustration of 2020 Range Rover SUV, front 3/4 view, flat floating roof design, RANGE ROVER lettering on grille, clamshell bonnet. White background, child-friendly flashcard style.",
  },
  {
    id: 23n,
    name: "Land Rover Defender",
    nickname: "Аялагч",
    country: "UK",
    identifyingFeatures: [
      "Квадрат хэлбэртэй биетэй",
      "Хавтгай нүүр дэх дугуй гэрэл",
      "Богино өргөтгөлтэй",
    ],
    imagePrompt:
      "Simple colorful vector illustration of 2020 Land Rover Defender SUV, front 3/4 view, boxy shape, round headlights on flat face, short overhangs. White background, child-friendly flashcard style.",
  },
  // USA — 3 cars
  {
    id: 24n,
    name: "Jeep Wrangler",
    nickname: "Бартааны Цэрэг",
    country: "USA",
    identifyingFeatures: [
      "Хавтгай хавчуур хэлбэртэй",
      "7 нүхтэй решеткэтэй",
      "Дугуй гэрэлтэй",
    ],
    imagePrompt:
      "Simple colorful vector illustration of Jeep Wrangler 4-door, front 3/4 view, flat body panels, round headlights, 7-slot grille. White background, child-friendly flashcard style.",
  },
  {
    id: 25n,
    name: "Ford Ranger Raptor",
    nickname: "Хар салхи",
    country: "USA",
    identifyingFeatures: [
      "FORD том үсгийн решеткэ",
      "Өргөн хавирга хэлбэрийн далавчтай",
      "Өндөр газрын клиренстэй",
    ],
    imagePrompt:
      "Simple colorful vector illustration of Ford Ranger Raptor pickup truck, front 3/4 view, huge FORD letter logo across black grille, wide flared fenders, high ground clearance. White background, child-friendly flashcard style.",
  },
  {
    id: 26n,
    name: "Chevrolet Tahoe",
    nickname: "Аварга Төмөр",
    country: "USA",
    identifyingFeatures: [
      "Аварга хром задгай решеткэ",
      "Маш квадрат том биетэй",
      "Хүчирхэг хэвтээ шугамтай",
    ],
    imagePrompt:
      "Simple colorful vector illustration of 2021 Chevrolet Tahoe large SUV, front 3/4 view, massive chrome split grille, boxy full-size body, strong horizontal lines. White background, child-friendly flashcard style.",
  },
  // Luxury — 2 cars
  {
    id: 28n,
    name: "Lexus LX 570",
    nickname: "Тансаг Заан",
    country: "Luxury",
    identifyingFeatures: [
      "Цагийн элс хэлбэрийн том решеткэ",
      "Гурвалсан цацраг гэрэлтэй",
      "Том хүчирхэг биетэй",
    ],
    imagePrompt:
      "Simple colorful vector illustration of 2020 Lexus LX 570 large luxury SUV, front 3/4 view, huge spindle grille shaped like hourglass, sharp triple-beam headlights, massive body. White background, child-friendly flashcard style.",
  },
  {
    id: 29n,
    name: "Lexus GX 470",
    nickname: "Дэгжин Морь",
    country: "Luxury",
    identifyingFeatures: [
      "Жижигхэн цагийн элс решеткэ",
      "Дугуй зөөлөн гэрэлтэй",
      "Өндөр шулуун биетэй",
    ],
    imagePrompt:
      "Simple colorful vector illustration of 2008 Lexus GX 470 SUV, front 3/4 view, smaller hourglass grille, rounder softer headlights than LX570, tall upright body. White background, child-friendly flashcard style.",
  },
  // Electric — 1 car
  {
    id: 27n,
    name: "BYD Han EV",
    nickname: "Дуугүй Салхи",
    country: "Electric",
    identifyingFeatures: [
      "Решеткэгүй бүрэн гөлгөр урд",
      "Ирээдүйн нарийн гэрэл",
      "Aerodynamic цэвэр хэлбэртэй",
    ],
    imagePrompt:
      "Simple colorful vector illustration of BYD Han electric car, front 3/4 view, completely smooth closed-off front with no grille, sleek futuristic headlights, clean aerodynamic shape. White background, child-friendly flashcard style.",
  },
];
