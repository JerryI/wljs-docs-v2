# PixelValuePositions

`PixelValuePositions[image, val]` returns a list of pixel positions in image that exactly match the value val.

- `PixelValuePositions[image, val, d]` returns all pixel positions that have values within a distance d from val.

## Examples

```wolfram
PixelValuePositions[Image[{{0, 1}, {1, 0}}], 1]
```

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
PixelValuePositions[img, Red, 0.1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PixelValuePositions.html) for more details.*