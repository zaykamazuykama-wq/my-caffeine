module {
  public type CarId = Nat;

  public type Country = {
    #Japan;
    #Korea;
    #Russia;
    #Germany;
    #UK;
    #USA;
    #Electric;
    #Luxury;
  };

  public type Car = {
    id : CarId;
    name : Text;
    nickname : Text;
    country : Country;
    identifyingFeatures : [Text];
    imagePrompt : Text;
  };
}
