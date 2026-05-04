import List "mo:core/List";
import Types "../types/cars";
import CarsLib "../lib/cars";

mixin (cars : List.List<Types.Car>) {

  public query func getAllCars() : async [Types.Car] {
    CarsLib.getAllCars(cars);
  };

  public query func getCarsByCountry(country : Types.Country) : async [Types.Car] {
    CarsLib.getCarsByCountry(cars, country);
  };

  public query func getCarById(id : Types.CarId) : async ?Types.Car {
    CarsLib.getCarById(cars, id);
  };
}
