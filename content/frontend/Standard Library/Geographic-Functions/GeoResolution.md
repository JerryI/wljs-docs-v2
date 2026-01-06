# GeoResolution

`GeoResolution` is an option for geographic functions that specifies an average distance between neighboring pixels in the resulting map.

## Examples

```wolfram
GeoGraphics[{}, GeoResolution -> Quantity[1, "Kilometers"]]
```

```wolfram
GeoImage[Entity["Country", "France"], GeoResolution -> Quantity[500, "Meters"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoResolution.html) for more details.*