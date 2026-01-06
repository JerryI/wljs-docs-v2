---
title: Legended
---

`Legended[expr, leg]` displays expr with legend leg.

- `Legended[expr, lbl]` indicates in plotting and charting functions that a legend entry for expr should be created, with label lbl.

## Examples

Add a legend to a plot:
```wolfram
Plot[{Sin[x], Cos[x]}, {x, 0, 2 Pi}, 
  PlotLegends -> {Legended[Sin[x], "Sine"], Legended[Cos[x], "Cosine"]}]
```

Display expression with legend:
```wolfram
Legended[Graphics[{Red, Disk[]}], "Red circle"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Legended.html) for more details.*