# RegionBounds

`RegionBounds[reg]` gives the bounding box for the region.

## Examples

Bounds of a disk:

```wolfram
RegionBounds[Disk[{1, 2}, 3]]
(* {{-2, 4}, {-1, 5}} *)
```

Bounds of a polygon:

```wolfram
RegionBounds[Polygon[{{0, 0}, {2, 0}, {1, 3}}]]
(* {{0, 2}, {0, 3}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionBounds.html) for more details.*