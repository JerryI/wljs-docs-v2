---
title: ImageResize
---

`ImageResize[image, width]` gives a resized version of image that is width pixels wide.

`ImageResize[image, {width, height}]` resizes to exact dimensions.

## Examples

Resize by width:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageResize[img, 256]
```

Resize to exact dimensions:

```wolfram
ImageResize[img, {200, 300}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageResize.html) for more details.