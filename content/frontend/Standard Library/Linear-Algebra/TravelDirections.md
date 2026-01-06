# TravelDirections

`TravelDirections[{loc1, loc2, ...}]` generates directions for travel from loc1 to loc2, ....

- `TravelDirections[{loc1, loc2, ...}, "prop"]` gives the property prop of travel directions.

## Examples

Get directions between cities:

```wolfram
TravelDirections[{Entity["City", {"Boston", "Massachusetts", "UnitedStates"}],
  Entity["City", {"NewYork", "NewYork", "UnitedStates"}]}]
```

Get distance:

```wolfram
TravelDirections[{Here, Entity["City", {"Chicago", "Illinois", "UnitedStates"}]}, "TravelDistance"]
```

Get travel time:

```wolfram
TravelDirections[{loc1, loc2}, "TravelTime"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TravelDirections.html) for more details.*