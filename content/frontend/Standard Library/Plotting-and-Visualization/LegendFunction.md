---
title: LegendFunction
---

`LegendFunction` is an option for legends that specifies an overall function to apply to the generated legend.

## Examples

```wolfram
Plot[{Sin[x], Cos[x]}, {x, 0, 2 Pi}, 
  PlotLegends -> Placed[{"Sin", "Cos"}, Right, 
    LegendFunction -> (Framed[#, Background -> LightYellow] &)]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LegendFunction.html) for more details.*