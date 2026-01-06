---
title: RandomColor
---

`RandomColor[]` gives a pseudorandom color directive in the RGBColor space. `RandomColor[n]` gives n pseudorandom colors.

## Examples

Generate a random color:

```wolfram
RandomColor[]
(* RGBColor[0.372, 0.827, 0.153] *)
```

Generate multiple random colors:

```wolfram
RandomColor[5]
(* {RGBColor[...], RGBColor[...], ...} *)
```

Generate colors from a specific color scheme:

```wolfram
RandomColor["SunsetColors", 3]
(* {RGBColor[...], ...} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RandomColor.html) for more details.*