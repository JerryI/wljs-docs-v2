# GeoGraphPlot

`GeoGraphPlot[{e1, e2, …}]` generates a plot of the geographic graph with edges `ei`.

- `GeoGraphPlot[{v1, v2, …}, {e1, e2, …}]` generates a plot with vertices `vi` and edges `ej`.
- `GeoGraphPlot[{vi -> vj, …}]` uses rules `vi -> vj` to specify the graph.
- `GeoGraphPlot[g]` displays the graph `g` with vertices at geographic locations on a map.
- `GeoGraphPlot[{…, w[ei], …}]` plots `ei` with features defined by the symbolic wrapper `w`.

## Examples

```wolfram
GeoGraphPlot[{Entity["City", {"NewYork", "NewYork", "UnitedStates"}] -> 
  Entity["City", {"London", "GreaterLondon", "UnitedKingdom"}]}]
```

```wolfram
GeoGraphPlot[Graph[EntityClass["City", "LargestCities"]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoGraphPlot.html) for more details.*