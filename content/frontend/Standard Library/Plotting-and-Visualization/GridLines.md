---
title: GridLines
---

`GridLines` is an option for two-dimensional graphics functions that specifies grid lines.

## Examples

Automatic grid lines:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, GridLines -> Automatic]
```

Custom grid lines:

```wolfram
Plot[Cos[x], {x, 0, 2 Pi}, 
  GridLines -> {{0, Pi, 2 Pi}, {-1, 0, 1}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GridLines.html) for more details.*