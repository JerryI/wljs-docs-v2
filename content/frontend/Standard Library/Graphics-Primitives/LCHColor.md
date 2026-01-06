---
title: LCHColor
---

`LCHColor[l, c, h]` represents a color in the LCH color space with lightness l, chroma c and hue h.

- `LCHColor[l, c, h, a]` specifies opacity a.
- `LCHColor["string"]` returns a color from an HTML color name etc.
- `LCHColor[color]` returns the LCH representation of color.

## Examples

```wolfram
LCHColor[0.5, 0.5, 0.7]
```

```wolfram
Graphics[{LCHColor[0.7, 0.3, 0.2], Disk[]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LCHColor.html) for more details.*