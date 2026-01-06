---
title: GeoStylingImageFunction
---

`GeoStylingImageFunction` is an option for specifying an image effect to apply to a geo style.

## Examples

```wolfram
GeoGraphics[{}, GeoBackground -> GeoStyling["Satellite", GeoStylingImageFunction -> (ImageAdjust[#] &)]]
```

```wolfram
GeoGraphics[{}, GeoStylingImageFunction -> (ColorNegate[#] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoStylingImageFunction.html) for more details.*