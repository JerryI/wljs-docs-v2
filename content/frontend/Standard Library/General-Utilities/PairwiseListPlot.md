# PairwiseListPlot

`PairwiseListPlot[{{y11, ..., y1n}, ..., {ym1, ..., ymn}}]` creates an array of scatter plots by plotting the data columns against each other in pairs.

- `PairwiseListPlot[{data1, data2, ...}]` plots multiple sets of data in each plot panel.

## Examples

```wolfram
PairwiseListPlot[RandomReal[1, {50, 3}]]
```

```wolfram
PairwiseListPlot[{RandomReal[1, {30, 3}], RandomReal[1, {30, 3}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PairwiseListPlot.html) for more details.*