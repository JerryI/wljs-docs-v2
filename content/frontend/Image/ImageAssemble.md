---
title: ImageAssemble
---

`ImageAssemble[{{im11, ..., im1n}, ..., {imm1, ..., immn}}]` assembles a single image from an array of images.

- `ImageAssemble[{{im11, ..., im1n}, ..., {imm1, ..., immn}}, fitting]` assembles images using the fitting method.

## Examples

Assemble images into a grid:
```wolfram
ImageAssemble[{{img1, img2}, {img3, img4}}]
```

Create a 2x2 mosaic:
```wolfram
imgs = Table[ExampleData[{"TestImage", "Mandrill"}], 2, 2];
ImageAssemble[imgs]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageAssemble.html) for more details.