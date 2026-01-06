# TravelDistanceList

`TravelDistanceList[{loc1, loc2, ..., locn}]` returns the list {TravelDistance[loc1, loc2], ..., TravelDistance[locn-1, locn]}.

## Examples

Get distances between consecutive cities:
```wolfram
TravelDistanceList[{Entity["City", {"NewYork", "NewYork", "UnitedStates"}], 
  Entity["City", {"Boston", "Massachusetts", "UnitedStates"}], 
  Entity["City", {"Philadelphia", "Pennsylvania", "UnitedStates"}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TravelDistanceList.html) for more details.*