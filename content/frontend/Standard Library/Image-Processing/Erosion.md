---
title: Erosion
---

`Erosion[image, ker]` gives the morphological erosion of image with respect to the structuring element ker.

`Erosion[image, r]` gives the erosion with respect to a range-r square.

## Examples

Erode a binary image:

```wolfram
img = Binarize[Import["ExampleData/lena.tif"]]
Erosion[img, 2]
```

With disk structuring element:

```wolfram
Erosion[img, DiskMatrix[3]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Erosion.html) for more details.*