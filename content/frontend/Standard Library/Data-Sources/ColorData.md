---
title: ColorData
---

`ColorData["scheme"]` gives a function that generates colors in the named color scheme when applied to parameter values.

`ColorData["scheme", "property"]` gives the specified property of a color scheme.

`ColorData["collection"]` gives a list of color schemes in a named collection.

## Examples

Use a gradient color scheme:

```wolfram
ColorData["Rainbow"][0.5]
(* GrayLevel[0.5] *)
```

List available indexed schemes:

```wolfram
ColorData["Indexed"]
(* {"ColorList1", "ColorList2", ...} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ColorData.html) for more details.*