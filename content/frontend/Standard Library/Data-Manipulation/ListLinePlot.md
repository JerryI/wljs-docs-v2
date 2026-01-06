---
title: ListLinePlot
---

`ListLinePlot[{y1, ..., yn}]` plots a line through points {1, y1}, ..., {n, yn}.

`ListLinePlot[{{x1, y1}, ..., {xn, yn}}]` plots a line through the specified coordinates.

## Examples

Plot a line through y values:

```wolfram
ListLinePlot[{1, 4, 9, 16, 25}]
```

Multiple lines:

```wolfram
ListLinePlot[{Table[Sin[x], {x, 0, 2 Pi, 0.1}], Table[Cos[x], {x, 0, 2 Pi, 0.1}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListLinePlot.html) for more details.*