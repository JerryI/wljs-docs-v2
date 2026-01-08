---
title: ImageRotate
---

`ImageRotate[image]` rotates image by 90° about its center.

`ImageRotate[image, θ]` rotates image by θ radians.

## Examples

Rotate 90 degrees:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageRotate[img]
```

Rotate by 45 degrees:

```wolfram
ImageRotate[img, Pi/4]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageRotate.html) for more details.