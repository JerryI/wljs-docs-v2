---
title: GridLinesStyle
---

`GridLinesStyle` is an option for 2D graphics functions that specifies how grid lines should be rendered.

## Examples

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, GridLines -> Automatic, GridLinesStyle -> Directive[Gray, Dashed]]
```

```wolfram
ListPlot[RandomReal[1, 20], GridLines -> Automatic, GridLinesStyle -> {Red, Blue}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GridLinesStyle.html) for more details.*