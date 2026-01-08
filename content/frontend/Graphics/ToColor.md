---
title: ToColor
---

`ToColor[color, form]` converts color to form if form is GrayLevel, RGBColor or CMYKColor. Otherwise form[color] is evaluated and the result is expected to be a valid color directive.

## Examples

Convert to RGB:
```wolfram
ToColor[Hue[0.5], RGBColor]
```

Convert to grayscale:
```wolfram
ToColor[Red, GrayLevel]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ToColor.html) for more details.