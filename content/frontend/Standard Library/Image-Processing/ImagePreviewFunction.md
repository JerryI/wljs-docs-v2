---
title: ImagePreviewFunction
---

`ImagePreviewFunction` is an option for `CurrentImage` and similar functions that specifies the function to apply to images before being displayed.

## Examples

Apply edge detection preview:

```wolfram
CurrentImage[ImagePreviewFunction -> EdgeDetect]
```

Custom preview with blur:

```wolfram
CurrentImage[ImagePreviewFunction -> (GaussianFilter[#, 5] &)]
```

No preview processing:

```wolfram
CurrentImage[ImagePreviewFunction -> Identity]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImagePreviewFunction.html) for more details.*