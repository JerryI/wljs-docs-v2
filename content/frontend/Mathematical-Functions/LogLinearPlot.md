---
title: LogLinearPlot
---

`LogLinearPlot[f, {x, xmin, xmax}]` generates a log-linear plot of f as a function of x from xmin to xmax.

`LogLinearPlot[{f1, f2, ...}, {x, xmin, xmax}]` plots several functions fi.

`LogLinearPlot[{..., w[fi], ...}, ...]` plots fi with features defined by the symbolic wrapper w.

`LogLinearPlot[..., {x} ∈ reg]` takes the variable x to be in the geometric region reg.

## Examples

Create a log-linear plot:

```wolfram
LogLinearPlot[Sin[Log[x]], {x, 1, 100}]
```

Plot multiple functions:

```wolfram
LogLinearPlot[{Log[x], Log[2, x]}, {x, 1, 1000}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LogLinearPlot.html) for more details.*