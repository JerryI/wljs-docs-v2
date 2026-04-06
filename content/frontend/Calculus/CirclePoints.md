---
title: CirclePoints
---

`CirclePoints[n]` gives the positions of n points equally spaced around the unit circle.

`CirclePoints[r, n]` gives the positions of n points equally spaced around a circle of radius r.

`CirclePoints[{r, θ1}, n]` starts at angle θ1 with respect to the x axis.

## Examples

Points on a unit circle:

```wolfram
CirclePoints[6]
(* {{1, 0}, {1/2, Sqrt[3]/2}, ...} *)
```

Visualize circle points:

```wolfram
Graphics[Point[CirclePoints[12]]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CirclePoints.html) for more details.