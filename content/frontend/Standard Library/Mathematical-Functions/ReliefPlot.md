---
title: ReliefPlot
---

`ReliefPlot[array]` generates a relief plot of an array of height values.

## Examples

```wolfram
ReliefPlot[Table[Sin[x] Cos[y], {x, 0, 3, 0.1}, {y, 0, 3, 0.1}]]
(* Graphics[...] *)
```

```wolfram
ReliefPlot[RandomReal[1, {50, 50}], ColorFunction -> "Rainbow"]
(* Graphics[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReliefPlot.html) for more details.*