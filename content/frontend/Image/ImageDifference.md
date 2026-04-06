---
title: ImageDifference
---

`ImageDifference[image1, image2]` gives an image where each pixel is the absolute difference of the corresponding pixels in image1 and image2.

## Examples

Compute difference between images:

```wolfram
img1 = ExampleData[{"TestImage", "Lena"}];
img2 = GaussianFilter[img1, 5];
ImageDifference[img1, img2]
```

Detect changes:

```wolfram
ImageDifference[img1, ColorNegate[img1]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageDifference.html) for more details.