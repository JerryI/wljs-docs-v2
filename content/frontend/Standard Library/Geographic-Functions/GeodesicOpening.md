# GeodesicOpening

`GeodesicOpening[image, ker]` gives the geodesic opening of `image` with respect to the structuring element `ker`.

- `GeodesicOpening[image, r]` gives the geodesic opening with respect to a range `r` square.
- `GeodesicOpening[data, …]` applies geodesic opening to an array of data.

## Examples

```wolfram
GeodesicOpening[img, DiskMatrix[5]]
```

```wolfram
GeodesicOpening[img, 3]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeodesicOpening.html) for more details.*