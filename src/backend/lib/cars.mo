import Types "../types/cars";
import List "mo:core/List";

module {
  public type Car = Types.Car;
  public type CarId = Types.CarId;
  public type Country = Types.Country;

  let seedCars : [Car] = [
    // 🇯🇵 Япон
    { id = 1; name = "Toyota Prius 30"; nickname = "Өндөг"; country = #Japan; identifyingFeatures = ["Дугуй толгой хэлбэр", "Гурвалжин толгойн гэрэл", "Урд 3/4 харагдалт"]; imagePrompt = "A simple colorful vector illustration of a 2010 Toyota Prius 30 hatchback known as The Egg. Front 3/4 view, smooth rounded body, rounded triangular headlights, vertical taillights. White background, child-friendly flashcard style." },
    { id = 2; name = "Toyota Prius 40"; nickname = "Сум"; country = #Japan; identifyingFeatures = ["Хурц өнцөгт шугамууд", "Сумны нүх мэт нарийн гэрэл", "Хонхорхой дэвсгэр"]; imagePrompt = "A simple colorful vector illustration of a 2016 Toyota Prius 40 hatchback known as The Arrow. Front 3/4 view, sharp angular lines, narrow sharp headlights, angular taillights. White background, child-friendly flashcard style." },
    { id = 3; name = "Toyota Prius 50"; nickname = "Сансрын хөлөг"; country = #Japan; identifyingFeatures = ["Нам өргөн байрлал", "Жижиг нарийрсан гэрэл", "Бүтэн өргөн ар гэрэл"]; imagePrompt = "A simple colorful vector illustration of a 2020 Toyota Prius 50 hatchback known as The Spaceship. Front 3/4 view, low wide stance, tiny squinting headlights, full-width rear light bar. White background, child-friendly flashcard style." },
    { id = 4; name = "Toyota Prius Alpha"; nickname = "7-ын Хүчтэй"; country = #Japan; identifyingFeatures = ["Өндөр арын хэсэг", "Жижиг бөгт", "Prius 30-тай ижил царай"]; imagePrompt = "A simple colorful vector illustration of a Toyota Prius Alpha 5-door MPV known as The Strong 7. Front 3/4 view, taller boxier rear with small hump, same family face as Prius 30 but taller roofline. White background, child-friendly flashcard style." },
    { id = 5; name = "Toyota Aqua"; nickname = "Дэлгээ"; country = #Japan; identifyingFeatures = ["Жижиг дугуй бие", "5 хаалга", "Найрсаг жижиг царай"]; imagePrompt = "A simple colorful vector illustration of a Toyota Aqua small hybrid hatchback known as The Cutie. Front 3/4 view, compact roundish body, 5 doors, small friendly face. White background, child-friendly flashcard style." },
    { id = 6; name = "Toyota Land Cruiser 100"; nickname = "Хүчит Заан"; country = #Japan; identifyingFeatures = ["Том дугуй бие", "Дөрвөлжин шилэн гэрэл", "Хатуу бампер"]; imagePrompt = "A simple colorful vector illustration of a 2004 Toyota Land Cruiser 100 SUV known as The Mighty Elephant. Front 3/4 view, large rounded body, big rectangular glass headlights, solid bumper. White background, child-friendly flashcard style." },
    { id = 7; name = "Toyota Land Cruiser 200"; nickname = "Төмөр Халим"; country = #Japan; identifyingFeatures = ["Асар том хайрцаг бие", "Дээшээ сунасан гэрэл", "Том хром тор"]; imagePrompt = "A simple colorful vector illustration of a 2015 Toyota Land Cruiser 200 SUV known as The Iron Whale. Front 3/4 view, massive boxy body, headlights stretching upward, large chrome grille bars. White background, child-friendly flashcard style." },
    { id = 8; name = "Toyota Land Cruiser 300"; nickname = "Шидэт Халим"; country = #Japan; identifyingFeatures = ["Асар том дөрвөлжин тор", "Жижиг дөрвөлжин гэрэл", "Орчин үеийн хурц шугамууд"]; imagePrompt = "A simple colorful vector illustration of a 2022 Toyota Land Cruiser 300 SUV known as The Magic Whale. Front 3/4 view, enormous rectangular grille, very small squarish headlights, modern sharp lines. White background, child-friendly flashcard style." },
    { id = 9; name = "Toyota Corolla"; nickname = "Гоёмсог"; country = #Japan; identifyingFeatures = ["Урт нарийхан нам бие", "Хурц тор ба гэрэл", "Дэгжин хэлбэр"]; imagePrompt = "A simple colorful vector illustration of a 2020 Toyota Corolla sedan known as The Elegant One. Front 3/4 view, long sleek low body, aggressive sharp grille and headlights. White background, child-friendly flashcard style." },
    { id = 10; name = "Toyota Camry"; nickname = "Тансаг Халим"; country = #Japan; identifyingFeatures = ["Маш өргөн доод тор", "Нарийхан гэрэл", "Нам өргөн байрлал"]; imagePrompt = "A simple colorful vector illustration of a 2021 Toyota Camry sedan known as The Luxury Whale. Front 3/4 view, very wide lower grille like a large mouth, sleek headlights, low wide stance. White background, child-friendly flashcard style." },
    { id = 11; name = "Toyota Harrier"; nickname = "Шонхор"; country = #Japan; identifyingFeatures = ["Хурц доош харсан хамар", "Нарийрсан дээш чиглэсэн гэрэл", "Купе хэлбэрийн дээвэр"]; imagePrompt = "A simple colorful vector illustration of a 2020 Toyota Harrier SUV known as The Falcon. Front 3/4 view, sharp pointed nose angling down, narrow upward-swept headlights, coupe-like roofline. White background, child-friendly flashcard style." },
    { id = 12; name = "Toyota Vitz"; nickname = "Хулгана"; country = #Japan; identifyingFeatures = ["Маш жижиг дугуй бие", "Том найрсаг нулимс хэлбэрийн гэрэл", "Дугуй арын хэсэг"]; imagePrompt = "A simple colorful vector illustration of a 2010 Toyota Vitz hatchback known as The Little Mouse. Front 3/4 view, very small cute round body, big friendly teardrop headlights, round rear. White background, child-friendly flashcard style." },
    // 🇰🇷 Солонгос
    { id = 13; name = "Hyundai Porter"; nickname = "Ажилсаг Шоргоолж"; country = #Korea; identifyingFeatures = ["Хавтгай бүхий хамар", "Нээлттэй тэрэгний буй", "Жижиг ачааны машин"]; imagePrompt = "A simple colorful vector illustration of a Hyundai Porter small truck known as The Hardworking Ant. Front 3/4 view, flat cab nose, open cargo bed at back with low sides. White background, child-friendly flashcard style." },
    { id = 14; name = "Hyundai Grand Starex"; nickname = "Гэр Бүст"; country = #Korea; identifyingFeatures = ["Өндөр хайрцаг хэлбэр", "Бүх талд том шил", "Гулсдаг хажуугийн хаалга"]; imagePrompt = "A simple colorful vector illustration of a Hyundai Grand Starex van known as The House Bus. Front 3/4 view, tall boxy shape, large windows all around, sliding side door. White background, child-friendly flashcard style." },
    { id = 15; name = "Hyundai Tucson"; nickname = "Хотын Барс"; country = #Korea; identifyingFeatures = ["Компакт нам бие", "Хурц шугамууд", "Том каскад тор"]; imagePrompt = "A simple colorful vector illustration of a modern Hyundai Tucson SUV known as City Leopard. Front 3/4 view, compact low body, sharp lines, large cascading front grille with geometric pattern. White background, child-friendly flashcard style." },
    // 🇷🇺 Орос
    { id = 16; name = "UAZ Patriot"; nickname = "Орос Баатар"; country = #Russia; identifyingFeatures = ["Маш хайрцаг цэргийн хэлбэр", "Дугуй гэрэл", "Хүнд металл бампер"]; imagePrompt = "A simple colorful vector illustration of a UAZ Patriot SUV known as The Russian Hero. Front 3/4 view, very boxy military-like shape, round headlights, heavy metal bumper, flat panels. White background, child-friendly flashcard style." },
    // 🇩🇪 Герман
    { id = 17; name = "Mercedes-Benz G-Class"; nickname = "Хүчит Хайрцаг"; country = #Germany; identifyingFeatures = ["Бүрэн хавтгай дөрвөлжин бие", "Дугуй гэрэл", "Хавтгай салхины шил"]; imagePrompt = "A simple colorful vector illustration of a 2020 Mercedes G-Class SUV known as The Mighty Box. Front 3/4 view, completely flat and square body, round headlights, flat windshield. White background, child-friendly flashcard style." },
    { id = 18; name = "BMW X5"; nickname = "Аюу"; country = #Germany; identifyingFeatures = ["Том босоо бөөрний тор", "Нарийхан гэрэл", "Том цонхнууд"]; imagePrompt = "A simple colorful vector illustration of a 2020 BMW X5 SUV known as The Bear. Front 3/4 view, large body with big upright kidney grille, sleek headlights, large greenhouse windows. White background, child-friendly flashcard style." },
    { id = 19; name = "BMW X6"; nickname = "Аюу бөгтөр"; country = #Germany; identifyingFeatures = ["X5-тай ижил царай", "Огцом налуу дээвэр", "Спорт хэлбэр"]; imagePrompt = "A simple colorful vector illustration of a 2020 BMW X6 coupe-SUV known as The Hunchback Bear. Front 3/4 view, same face as X5 but dramatically sloping roof at back, sporty silhouette. White background, child-friendly flashcard style." },
    { id = 20; name = "Audi Q7"; nickname = "Нэг Нүдэн"; country = #Germany; identifyingFeatures = ["Том нэгдмэл тор", "Хурц матрикс гэрэл", "LED гарын үсэг"]; imagePrompt = "A simple colorful vector illustration of a 2021 Audi Q7 SUV known as The One-Eye. Front 3/4 view, large singleframe grille, sharp high-tech matrix headlights with distinct LED signature. White background, child-friendly flashcard style." },
    { id = 21; name = "Volkswagen Touareg"; nickname = "Чоно"; country = #Germany; identifyingFeatures = ["Өргөн хэвтээ шугамууд", "Энгийн дэгжин тор", "Тайван нэр хүндтэй царай"]; imagePrompt = "A simple colorful vector illustration of a 2021 VW Touareg SUV known as The Wolf. Front 3/4 view, wide plain horizontal lines, simple elegant grille with chrome bars, calm dignified face. White background, child-friendly flashcard style." },
    // 🇬🇧 Англи
    { id = 22; name = "Range Rover"; nickname = "Хаан Титэм"; country = #UK; identifyingFeatures = ["Маш хавтгай дээвэр", "Хөвөгч дээвэрний загвар", "RANGE ROVER бичиг"]; imagePrompt = "A simple colorful vector illustration of a 2020 Range Rover SUV known as The King Crown. Front 3/4 view, very flat roof floating roof design, RANGE ROVER lettering on bonnet and grille. White background, child-friendly flashcard style." },
    { id = 23; name = "Land Rover Defender"; nickname = "Аялагч"; country = #UK; identifyingFeatures = ["Хайрцаг хэлбэр", "Хавтгай нүүрэн дээр дугуй гэрэл", "Богино хэтийн зай"]; imagePrompt = "A simple colorful vector illustration of a 2020 Land Rover Defender SUV known as The Traveler. Front 3/4 view, boxy shape, round headlights on flat face, short overhangs. White background, child-friendly flashcard style." },
    // 🇺🇸 Америк
    { id = 24; name = "Jeep Wrangler"; nickname = "Бартааны Цэрэг"; country = #USA; identifyingFeatures = ["Хавтгай биеийн самбарууд", "Авч болдог хаалга ба дээвэр", "7 нүхтэй тор"]; imagePrompt = "A simple colorful vector illustration of a Jeep Wrangler 4-door off-roader known as The Terrain Soldier. Front 3/4 view, flat body panels, removable doors and roof visible, round headlights, 7-slot grille. White background, child-friendly flashcard style." },
    { id = 25; name = "Ford Ranger Raptor"; nickname = "Хар салхи"; country = #USA; identifyingFeatures = ["Том FORD үсэг тор дээр", "Өргөн дэлгэрсэн далавч", "Өндөр газрын зай"]; imagePrompt = "A simple colorful vector illustration of a Ford Ranger Raptor pickup truck known as The Hurricane. Front 3/4 view, huge bold FORD letter logo across black grille, wide flared fenders, high ground clearance. White background, child-friendly flashcard style." },
    { id = 26; name = "Chevrolet Tahoe"; nickname = "Аварга Төмөр"; country = #USA; identifyingFeatures = ["Асар том хром тор", "Маш том хайрцаг бие", "Хүчтэй хэвтээ шугамууд"]; imagePrompt = "A simple colorful vector illustration of a 2021 Chevrolet Tahoe large SUV known as The Giant Iron. Front 3/4 view, massive chrome split grille, very boxy full-size body, strong horizontal lines. White background, child-friendly flashcard style." },
    // ⚡ Цахилгаан
    { id = 27; name = "BYD"; nickname = "Дуугүй Салхи"; country = #Electric; identifyingFeatures = ["Бүрэн гөлгөр нүүр", "Тор байхгүй", "Нисгэгч хэлбэрийн гэрэл"]; imagePrompt = "A simple colorful vector illustration of a BYD electric car known as The Silent Wind. Front 3/4 view, completely smooth closed-off front with no grille, sleek futuristic headlights, clean aerodynamic shape. White background, child-friendly flashcard style." },
  ];

  public func init(cars : List.List<Car>) {
    if (cars.size() == 0) {
      for (car in seedCars.vals()) {
        cars.add(car);
      };
    };
  };

  public func getAllCars(cars : List.List<Car>) : [Car] {
    cars.toArray();
  };

  public func getCarsByCountry(cars : List.List<Car>, country : Country) : [Car] {
    let filtered = cars.filter(func(c) { c.country == country });
    filtered.toArray();
  };

  public func getCarById(cars : List.List<Car>, id : CarId) : ?Car {
    cars.find(func(c) { c.id == id });
  };

  public func nextId(cars : List.List<Car>) : CarId {
    cars.size() + 1;
  };
}
