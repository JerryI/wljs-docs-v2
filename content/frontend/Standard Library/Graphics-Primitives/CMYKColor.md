---
title: CMYKColor
---

`CMYKColor[c, m, y, k]` represents a color in the CMYK color space with cyan, magenta, yellow, and black components.

`CMYKColor[c, m, y, k, a]` specifies opacity a.

`CMYKColor[color]` returns the CMYK representation of a color.

## Examples

Create a CMYK color:

```wolfram
CMYKColor[1, 0, 0, 0]
(* Cyan color *)
```

Convert an RGB color to CMYK:

```wolfram
CMYKColor[Red]
(* CMYKColor[0., 1., 1., 0.] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CMYKColor.html) for more details.*