---
title: ImageGraphics
---

`ImageGraphics[image]` returns the content of image in the form of scalable vector graphics.

- `ImageGraphics[image, n]` uses up to n colors for the vector graphics.
- `ImageGraphics[image, colors]` creates vector graphics containing the specified colors.

## Examples

```wolfram
ImageGraphics[ExampleData[{"TestImage", "Lena"}]]
```

```wolfram
ImageGraphics[Binarize[ExampleData[{"TestImage", "Mandrill"}]], 2]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageGraphics.html) for more details.