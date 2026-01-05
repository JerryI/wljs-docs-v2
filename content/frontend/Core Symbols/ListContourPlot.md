# ListContourPlot

`ListContourPlot[data]` generates a contour plot from a 2D array of height values or from `{{x, y, z}, ...}` data points.

## Examples

Create contour plots from data:

```wolfram
(* From a grid of values *)
data = Table[Sin[x] Sin[y], {x, 0, Pi, 0.1}, {y, 0, Pi, 0.1}]
ListContourPlot[data]

(* From scattered points *)
points = Table[{x, y, x^2 + y^2}, {x, -2, 2, 0.2}, {y, -2, 2, 0.2}]
ListContourPlot[Flatten[points, 1]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListContourPlot.html) for more details.*