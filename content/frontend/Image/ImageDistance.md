---
title: ImageDistance
---

`ImageDistance[image1, image2]` returns a distance measure between image1 and image2.

`ImageDistance[image1, image2, pos]` places image2 centered at pos in image1.

## Examples

Compute image distance:

```wolfram
img1 = ExampleData[{"TestImage", "Lena"}];
img2 = GaussianFilter[img1, 3];
ImageDistance[img1, img2]
```

With different metrics:

```wolfram
ImageDistance[img1, img2, DistanceFunction -> MeanSquaredDistance]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageDistance.html) for more details.