import { createActor } from "@/backend";
import { SEEDED_CARS } from "@/data/cars";
import type { Car } from "@/types/car";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";

// Actor-based queries fall back to seeded data when backend returns empty
function toFrontendCar(raw: {
  id: bigint;
  name: string;
  nickname: string;
  country: {
    Japan?: null;
    Korea?: null;
    Russia?: null;
    Germany?: null;
    UK?: null;
    USA?: null;
    Electric?: null;
    Luxury?: null;
  };
  identifyingFeatures: string[];
  imagePrompt: string;
}): Car {
  const country = (Object.keys(raw.country)[0] ?? "Japan") as Car["country"];
  return { ...raw, country };
}

export function useAllCars() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Car[]>({
    queryKey: ["cars"],
    queryFn: async () => {
      if (!actor) return SEEDED_CARS;
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result = await (actor as any).getAllCars();
        if (Array.isArray(result) && result.length > 0) {
          return result.map(toFrontendCar);
        }
      } catch {
        // fall through to seeded data
      }
      return SEEDED_CARS;
    },
    enabled: !isFetching,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCarsByCountry(country: Car["country"]) {
  const { data: allCars = [] } = useAllCars();
  return allCars.filter((c) => c.country === country);
}

export function useCarById(id: bigint) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Car | null>({
    queryKey: ["car", id.toString()],
    queryFn: async () => {
      if (!actor) return SEEDED_CARS.find((c) => c.id === id) ?? null;
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result = await (actor as any).getCarById(id);
        if (result && result.__kind__ === "Some") {
          return toFrontendCar(result.value);
        }
      } catch {
        // fall through to seeded data
      }
      return SEEDED_CARS.find((c) => c.id === id) ?? null;
    },
    enabled: !isFetching,
    staleTime: 1000 * 60 * 5,
  });
}
