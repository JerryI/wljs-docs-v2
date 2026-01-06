# SpatialBoundaryCorrection

`SpatialBoundaryCorrection` is an option to various spatial statistics functions that controls how to correct for boundary effects of observation regions.

## Examples

Use border correction:
```wolfram
RipleyK[pointdata, SpatialBoundaryCorrection -> "BorderSubtraction"]
```

No boundary correction:
```wolfram
SpatialPointData[pts, SpatialBoundaryCorrection -> None]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpatialBoundaryCorrection.html) for more details.*