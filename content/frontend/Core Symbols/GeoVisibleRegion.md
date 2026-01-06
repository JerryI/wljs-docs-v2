# GeoVisibleRegion

`GeoVisibleRegion[{lat, lon, h}]` is a two-dimensional `GeoGraphics` primitive that represents the region on the surface of the Earth visible from the point of coordinates `lat`, `lon` and height `h` above the reference ellipsoid.

- `GeoVisibleRegion[pos]` represents the region visible from the position `pos`.
- `GeoVisibleRegion[{pos1, pos2, …}]` represents the collection of regions visible from the positions `posi`.

## Examples

```wolfram
GeoGraphics[GeoVisibleRegion[GeoPosition[{0, 0, 400000}]]]
```

```wolfram
GeoGraphics[GeoVisibleRegion[{GeoPosition[{40, -74, 100000}], GeoPosition[{51, 0, 100000}]}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoVisibleRegion.html) for more details.*