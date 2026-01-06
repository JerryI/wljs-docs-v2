---
title: ImageCollage
---

`ImageCollage[{image1, image2, ...}]` creates a collage of images.

`ImageCollage[{w1 -> image1, w2 -> image2, ...}]` creates a weighted collage.

## Examples

Create a simple collage:

```wolfram
ImageCollage[{ExampleData[{"TestImage", "Lena"}], ExampleData[{"TestImage", "Mandrill"}]}]
```

Weighted collage:

```wolfram
ImageCollage[{2 -> img1, 1 -> img2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageCollage.html) for more details.*