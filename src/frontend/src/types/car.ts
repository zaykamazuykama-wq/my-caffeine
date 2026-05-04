export type Country =
  | "Japan"
  | "Korea"
  | "Russia"
  | "Germany"
  | "UK"
  | "USA"
  | "Electric"
  | "Luxury";

export interface Car {
  id: bigint;
  name: string;
  nickname: string;
  country: Country;
  identifyingFeatures: string[];
  imagePrompt: string;
}

export interface CarWithImage extends Car {
  imageUrl?: string;
}
