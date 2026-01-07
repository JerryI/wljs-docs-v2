---
title: ImageData
---

`ImageData[image]` gives the array of pixel values in an Image object.

`ImageData[image, "type"]` converts pixel values to the specified type.

## Examples

Get pixel data:

```wolfram
img = Image[{{0, 0.5, 1}, {0.3, 0.6, 0.9}}];
ImageData[img]
(* {{0., 0.5, 1.}, {0.3, 0.6, 0.9}} *)
```

Get byte values:

```wolfram
ImageData[img, "Byte"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageData.html) for more details.*