# GeoVisibleRegionBoundary

`GeoVisibleRegionBoundary[{lat, lon, h}]` is a one-dimensional GeoGraphics primitive that represents the boundary of the region on the surface of the Earth visible from the point of coordinates lat, lon and height h above the reference ellipsoid.

`GeoVisibleRegionBoundary[pos]` represents the boundary of the region visible from the position pos.

`GeoVisibleRegionBoundary[{pos1, pos2, ...}]` represents the collection of boundaries of the regions visible from the positions posi.

## Examples

Show the visible region boundary from a satellite:

```wolfram
GeoGraphics[GeoVisibleRegionBoundary[{0, 0, Quantity[400, "Kilometers"]}]]
```

Visible region from the ISS location:

```wolfram
GeoGraphics[{Red, GeoVisibleRegionBoundary[Entity["Satellite", "ISS"]]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoVisibleRegionBoundary.html) for more details.*