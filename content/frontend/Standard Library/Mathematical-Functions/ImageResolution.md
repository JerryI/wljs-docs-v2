---
title: ImageResolution
---

`ImageResolution` is an option for `Export`, `Rasterize`, and related functions that specifies at what resolution bitmap images should be rendered.

## Examples

```wolfram
Export["plot.png", Plot[Sin[x], {x, 0, 2 Pi}], ImageResolution -> 300]
```

```wolfram
Rasterize[Graphics[Circle[]], ImageResolution -> 150]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageResolution.html) for more details.*