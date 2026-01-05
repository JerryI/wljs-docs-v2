# ColorConvert

`ColorConvert[color,colspace]` converts the color space of a color to the specified color space colspace.

`ColorConvert[image,colspace]` converts the color space of image.

`ColorConvert[{expr1,…},colspace]` converts the color space of a list of colors and images.

## Examples

Convert red to grayscale:

```wolfram
ColorConvert[Red, "Grayscale"]
(* GrayLevel[0.299] *)
```

Convert to HSB color space:

```wolfram
ColorConvert[RGBColor[1, 0.5, 0], "HSB"]
(* Hue[0.0833333, 1., 1.] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ColorConvert.html) for more details.*