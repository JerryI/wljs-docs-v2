# TravelTime

`TravelTime[{loc1,loc2,…}]` gives the estimated time to travel from loc1 to loc2, ….

## Examples

Estimate travel time between two cities:

```wolfram
TravelTime[{Entity["City", {"Boston", "Massachusetts", "UnitedStates"}], Entity["City", {"NewYork", "NewYork", "UnitedStates"}]}]
(* Quantity[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TravelTime.html) for more details.*