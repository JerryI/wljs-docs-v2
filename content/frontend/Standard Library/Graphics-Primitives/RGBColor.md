---
title: RGBColor
---

`RGBColor[r, g, b]` represents a color using red, green, and blue components (0 to 1). `RGBColor[r, g, b, a]` adds an opacity value.

## Examples

Use RGB colors in graphics:

```wolfram
Graphics[{
  RGBColor[1, 0, 0], Disk[{0, 0}, 0.5],
  RGBColor[0, 0.5, 1, 0.5], Disk[{0.3, 0.3}, 0.5]
}]

(* From hex string *)
RGBColor["#FF6600"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RGBColor.html) for more details.*