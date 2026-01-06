---
title: PairwiseSmoothDensityHistogram
---

`PairwiseSmoothDensityHistogram[{{y11,…,y1n},…,{ym1,…,ymn}}]` creates an array of smooth density histograms by plotting the data columns against each other in pairs.

## Examples

Create pairwise density histograms:

```wolfram
data = RandomReal[1, {100, 3}];
PairwiseSmoothDensityHistogram[data]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PairwiseSmoothDensityHistogram.html) for more details.*