# RasterSize

`RasterSize` is an option for `Rasterize` and related functions that determines the absolute pixel size of the raster generated.

## Examples

Rasterize with specific size:

```wolfram
Rasterize[Plot[Sin[x], {x, 0, 2 Pi}], RasterSize -> 400]
```

Specify width and height:

```wolfram
Rasterize[Graphics[Circle[]], RasterSize -> {200, 100}]
```

Export with specific resolution:

```wolfram
Export["image.png", Plot[x^2, {x, -2, 2}], RasterSize -> 800]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RasterSize.html) for more details.*