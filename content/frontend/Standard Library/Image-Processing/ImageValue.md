---
title: ImageValue
---

`ImageValue[image,pos]` gives the interpolated value of image at position pos.

`ImageValue[image,pos,"type"]` gives the value converted to the specified type.

## Examples

Get the interpolated pixel value at a position:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageValue[img, {100.5, 200.5}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageValue.html) for more details.*