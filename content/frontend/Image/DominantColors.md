---
title: DominantColors
---

`DominantColors[image]` returns dominant colors in image.

`DominantColors[image,n]` returns at most n dominant colors in image.

`DominantColors[image,n,prop]` returns the specified property prop for the regions that belong to the same dominant color.

`DominantColors[image,n,prop,format]` returns the output in the specified format.

`DominantColors[{image1,image2,…},…]` returns dominant colors in each imagei.

## Examples

Get the 3 most dominant colors in an image:

```wolfram
DominantColors[img, 3]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DominantColors.html) for more details.