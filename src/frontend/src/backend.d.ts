import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type CarId = bigint;
export interface Car {
    id: CarId;
    identifyingFeatures: Array<string>;
    nickname: string;
    country: Country;
    name: string;
    imagePrompt: string;
}
export enum Country {
    UK = "UK",
    USA = "USA",
    Luxury = "Luxury",
    Russia = "Russia",
    Korea = "Korea",
    Electric = "Electric",
    Germany = "Germany",
    Japan = "Japan"
}
export interface backendInterface {
    getAllCars(): Promise<Array<Car>>;
    getCarById(id: CarId): Promise<Car | null>;
    getCarsByCountry(country: Country): Promise<Array<Car>>;
}
