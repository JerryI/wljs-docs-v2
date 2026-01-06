# GeoImage

`GeoImage[reg]` gives a satellite image of the geo region reg.

`GeoImage[reg, mapstyle]` gives an image of the geo region reg with style mapstyle.

## Examples

Get a satellite image of a location:

```wolfram
GeoImage[Entity["City", {"NewYork", "NewYork", "UnitedStates"}]]
```

Use a specific map style:

```wolfram
GeoImage[Entity["Country", "France"], "StreetMap"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoImage.html) for more details.*