import List "mo:core/List";
import Types "types/cars";
import CarsMixin "mixins/cars-api";
import CarsLib "lib/cars";

actor {
  let cars = List.empty<Types.Car>();

  CarsLib.init(cars);

  include CarsMixin(cars);
};
