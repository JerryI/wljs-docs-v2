# SpatialBinnedPointData

`SpatialBinnedPointData[{reg1 -> val1, reg2 -> val2, ...}]` represents values vali associated with disjoint regions regi.

- `SpatialBinnedPointData[{reg1, reg2, ...} -> {val1, val2, ...}]` gives the same result.
- `SpatialBinnedPointData[..., reg]` gives the overall observation region reg.

## Examples

Create binned spatial data:
```wolfram
SpatialBinnedPointData[{Rectangle[{0, 0}] -> 5, Rectangle[{1, 0}] -> 3}]
```

With observation region:
```wolfram
SpatialBinnedPointData[bins, Rectangle[{0, 0}, {10, 10}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpatialBinnedPointData.html) for more details.*