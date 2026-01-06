# PixelValue

`PixelValue[image, pos]` gives the pixel value of image at position pos.

- `PixelValue[image, pos, "type"]` gives the pixel value converted to the specified type.

## Examples

Get a pixel value at a specific position:
```wolfram
img = ExampleData[{"TestImage", "Mandrill"}];
PixelValue[img, {100, 100}]
```

Get the pixel value as a color:
```wolfram
PixelValue[img, {50, 50}, "Color"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PixelValue.html) for more details.*