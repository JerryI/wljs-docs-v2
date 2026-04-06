---
title: SpatialRandomnessTest
---

`SpatialRandomnessTest[pdata]` tests whether the point collection pdata is distributed uniformly over the observation region.

`SpatialRandomnessTest[pdata,"property"]` returns the value of "property".

## Examples

Test spatial randomness of points:

```wolfram
pts = RandomReal[1, {50, 2}];
SpatialRandomnessTest[pts]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpatialRandomnessTest.html) for more details.