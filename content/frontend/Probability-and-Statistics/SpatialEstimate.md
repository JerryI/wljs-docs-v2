---
title: SpatialEstimate
---

`SpatialEstimate[{loc1 -> val1, loc2 -> val2, ...}]` creates a spatial prediction from values vali given at locations loci.

- `SpatialEstimate[{loc1, loc2, ...} -> {val1, val2, ...}]` generates the same result.

## Examples

Create a spatial estimate:
```wolfram
SpatialEstimate[{{0, 0} -> 1, {1, 0} -> 2, {0, 1} -> 3}]
```

Predict at a new location:
```wolfram
estimate = SpatialEstimate[data];
estimate[{0.5, 0.5}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpatialEstimate.html) for more details.