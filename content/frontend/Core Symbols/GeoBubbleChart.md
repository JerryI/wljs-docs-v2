# GeoBubbleChart

`GeoBubbleChart[{reg1 -> val1, reg2 -> val2, …}]` makes a geo bubble chart with bubbles centered at the geographic regions `regi` with sizes `vali`.

- `GeoBubbleChart[regions -> values]` uses a collection of regions `regi` from `regions` with corresponding sizes `vali` from `values`.
- `GeoBubbleChart[{data1, data2, …}]` plots data from all the `datai`.
- `GeoBubbleChart[{…, w[datai], …}]` plots `datai` with features defined by the symbolic wrapper `w`.

## Examples

```wolfram
GeoBubbleChart[{Entity["City", {"NewYork", "NewYork", "UnitedStates"}] -> 8, 
  Entity["City", {"LosAngeles", "California", "UnitedStates"}] -> 4}]
```

```wolfram
GeoBubbleChart[EntityClass["Country", "G8"] -> "Population"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoBubbleChart.html) for more details.*