# PairwiseProbabilityPlot

`PairwiseProbabilityPlot[{{y11, ..., y1n}, ..., {ym1, ..., ymn}}]` plots a CDF of columns in the data against each other.

This function creates pairwise probability plots for comparing distributions of multiple datasets.

## Examples

```wolfram
data = {RandomVariate[NormalDistribution[], 100], 
        RandomVariate[NormalDistribution[1, 2], 100]};
PairwiseProbabilityPlot[Transpose[data]]
```

```wolfram
PairwiseProbabilityPlot[RandomReal[1, {50, 3}]]
```

```wolfram
PairwiseProbabilityPlot[Table[RandomVariate[NormalDistribution[i, 1], 100], {i, 3}] // Transpose]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PairwiseProbabilityPlot.html) for more details.*