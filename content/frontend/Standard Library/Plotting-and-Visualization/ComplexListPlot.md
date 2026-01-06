---
title: ComplexListPlot
---

`ComplexListPlot[{z1, z2, ...}]` plots complex numbers z1, z2, ... as points in the complex plane.

`ComplexListPlot[{data1, data2, ...}]` plots data from all datai.

## Examples

Plot complex numbers:

```wolfram
ComplexListPlot[{1 + I, 2 - I, -1 + 2 I}]
```

Plot roots of unity:

```wolfram
ComplexListPlot[Table[Exp[2 Pi I k/5], {k, 0, 4}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ComplexListPlot.html) for more details.*