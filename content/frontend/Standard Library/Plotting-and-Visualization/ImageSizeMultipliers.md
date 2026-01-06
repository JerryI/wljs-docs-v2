---
title: ImageSizeMultipliers
---

`ImageSizeMultipliers` is an option that specifies how much smaller to render graphics that appear within other constructs.

This option controls the relative sizing of nested graphics.

## Examples

```wolfram
Style[Plot[Sin[x], {x, 0, 2 Pi}], ImageSizeMultipliers -> 0.5]
```

```wolfram
Grid[{{Graphics[Circle[]], "label"}}, ImageSizeMultipliers -> {0.7, 1}]
```

```wolfram
Options[Style, ImageSizeMultipliers]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageSizeMultipliers.html) for more details.*