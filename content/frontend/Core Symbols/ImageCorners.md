# ImageCorners

`ImageCorners[image]` finds corners in image and returns their coordinates.

`ImageCorners[image, r]` finds corners at a pixel range r.

## Examples

Find corners in an image:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
corners = ImageCorners[img];
HighlightImage[img, corners]
```

With specific range:

```wolfram
ImageCorners[img, 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageCorners.html) for more details.*