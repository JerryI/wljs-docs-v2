---
title: ListVectorPlot
---

`ListVectorPlot[varr]` generates a vector plot from an array of vectors.

## Examples

From array of vectors:

```wolfram
vectors = Table[{Sin[i], Cos[j]}, {i, 5}, {j, 5}];
ListVectorPlot[vectors]
```

With explicit positions:

```wolfram
data = Table[{{x, y}, {-y, x}}, {x, -2, 2}, {y, -2, 2}];
ListVectorPlot[Flatten[data, 1]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListVectorPlot.html) for more details.*