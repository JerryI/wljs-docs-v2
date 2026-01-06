---
title: CoordinateBoundsArray
---

`CoordinateBoundsArray[{{xmin, xmax}, {ymin, ymax}, ...}]` generates an array of {x, y, ...} coordinates with integer steps in each dimension.

`CoordinateBoundsArray[{xrange, yrange, ...}, d]` uses step d in each dimension.

`CoordinateBoundsArray[{xrange, yrange, ...}, {dx, dy, ...}]` uses steps dx, dy, ... in successive dimensions.

## Examples

Generate coordinate array:

```wolfram
CoordinateBoundsArray[{{0, 2}, {0, 3}}, 1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CoordinateBoundsArray.html) for more details.*