---
title: MaxCellMeasure
---

`MaxCellMeasure` is an option for `DiscretizeRegion` and related functions that specifies the maximum cell measure for the result.

## Examples

Create a finer mesh with a smaller cell measure:

```wolfram
DiscretizeRegion[Disk[], MaxCellMeasure -> 0.01]
```

Control mesh density for a 3D region:

```wolfram
DiscretizeRegion[Ball[], MaxCellMeasure -> 0.1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MaxCellMeasure.html) for more details.*