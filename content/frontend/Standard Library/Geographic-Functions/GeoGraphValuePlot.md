---
title: GeoGraphValuePlot
---

`GeoGraphValuePlot[{{src1,dest1,flow1},{src2,dest2,flow2},…}]` plots the flows between geo locations.

`GeoGraphValuePlot[{{e1,val1},{e2,val2},…}]` plots the values vali for the edges ei.

`GeoGraphValuePlot[g]` plots the flow for a graph g with associated edge weights.

## Examples

Plot flows between cities:

```wolfram
GeoGraphValuePlot[{
  {Entity["City", {"NewYork", "NewYork", "UnitedStates"}], 
   Entity["City", {"LosAngeles", "California", "UnitedStates"}], 100},
  {Entity["City", {"Chicago", "Illinois", "UnitedStates"}], 
   Entity["City", {"Miami", "Florida", "UnitedStates"}], 50}
}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoGraphValuePlot.html) for more details.*