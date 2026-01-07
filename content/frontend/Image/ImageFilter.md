---
title: ImageFilter
---

`ImageFilter[f, image, r]` applies the function f to the range-r neighborhood of each pixel in each channel of image.

## Examples

Apply a mean filter to an image:

```wolfram
ImageFilter[Mean, image, 2]
```

Apply a custom filter function:

```wolfram
ImageFilter[Max[#] - Min[#] &, image, 3]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageFilter.html) for more details.*