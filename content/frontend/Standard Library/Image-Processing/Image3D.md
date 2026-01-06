---
title: Image3D
---

`Image3D[data]` represents a 3D image with voxel values given by the array data.

`Image3D[{image1, image2, ...}]` creates a 3D image from a list of 2D images.

## Examples

Create a 3D image from random data:

```wolfram
Image3D[RandomReal[1, {20, 20, 20}]]
```

Stack 2D images:

```wolfram
Image3D[Table[ExampleData[{"TestImage", "Lena"}], 10]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Image3D.html) for more details.*