---
title: WhitePoint
---

`WhitePoint` is an option for `ColorConvert`, `ChromaticityPlot` and other functions to specify the white point.

## Examples

```wolfram
ColorConvert[RGBColor[1, 0, 0], "XYZ", WhitePoint -> "D65"]
```

```wolfram
ChromaticityPlot[{Red, Green, Blue}, WhitePoint -> "D50"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WhitePoint.html) for more details.*