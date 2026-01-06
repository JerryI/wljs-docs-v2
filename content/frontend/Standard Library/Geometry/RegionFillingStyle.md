---
title: RegionFillingStyle
---

`RegionFillingStyle` is an option for plotting functions that specifies the style for the filled region over which the plot is being drawn.

## Examples

Filled region style:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, Filling -> Bottom, RegionFillingStyle -> LightBlue]
```

With RegionFunction:

```wolfram
Plot[x^2, {x, -2, 2}, Filling -> Axis, 
  RegionFunction -> Function[{x, y}, y > 0],
  RegionFillingStyle -> LightGreen]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionFillingStyle.html) for more details.*