# GeoHemisphereBoundary

`GeoHemisphereBoundary[]` is a one-dimensional `GeoGraphics` primitive that represents the boundary line of a hemisphere of the Earth centered at the current geo location.

- `GeoHemisphereBoundary[loc]` represents the boundary line of a hemisphere centered at the location `loc`.

## Examples

```wolfram
GeoGraphics[GeoHemisphereBoundary[]]
```

```wolfram
GeoGraphics[GeoHemisphereBoundary[Entity["City", {"Tokyo", "Tokyo", "Japan"}]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoHemisphereBoundary.html) for more details.*