---
title: CurvatureFlowFilter
---

`CurvatureFlowFilter[image]` applies a mean curvature flow filter to image.

`CurvatureFlowFilter[image, t]` specifies the amount of curvature flow time t to be applied.

`CurvatureFlowFilter[image, t, k]` applies the curvature flow with a modified conductance term parametrized by k.

## Examples

Apply curvature flow smoothing:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
CurvatureFlowFilter[img]
```

With specified time:

```wolfram
CurvatureFlowFilter[img, 10]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CurvatureFlowFilter.html) for more details.