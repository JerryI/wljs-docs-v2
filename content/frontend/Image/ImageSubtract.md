---
title: ImageSubtract
---

`ImageSubtract[image, x]` subtracts a constant amount x from each channel value in image.

`ImageSubtract[image1, image2]` subtracts corresponding pixels.

## Examples

Darken an image:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageSubtract[img, 0.2]
```

Subtract two images:

```wolfram
ImageSubtract[img, GaussianFilter[img, 5]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageSubtract.html) for more details.