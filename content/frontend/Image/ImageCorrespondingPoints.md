---
title: ImageCorrespondingPoints
---

`ImageCorrespondingPoints[image1, image2]` finds a set of matching interest points in image1 and image2 and returns their pixel coordinates.

## Examples

Find corresponding points between two images:

```wolfram
img1 = ExampleData[{"TestImage", "Lena"}];
img2 = ImageRotate[img1, 0.1];
{pts1, pts2} = ImageCorrespondingPoints[img1, img2]
```

Visualize the correspondences:

```wolfram
HighlightImage[img1, pts1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageCorrespondingPoints.html) for more details.*