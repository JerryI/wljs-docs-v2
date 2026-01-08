---
title: RegionFit
---

`RegionFit[{p1, p2, ...}, "model"]` finds a geometric region "model" that best fits the points p1, p2, ….

- `RegionFit[{p1, p2, ...}, "model", "prop"]` specifies what fit property "prop" should be returned.

## Examples

```wolfram
RegionFit[RandomPoint[Disk[], 100], "Disk"]
```

```wolfram
RegionFit[pts, "Line", "Region"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionFit.html) for more details.