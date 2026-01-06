# ListSliceContourPlot3D

`ListSliceContourPlot3D[farr, surf]` generates a contour plot of the 3D array of values sliced to the surface surf.

`ListSliceContourPlot3D[{{x1, y1, z1, f1}, ...}, surf]` generates a slice contour plot for the values f_i at points {x_i, y_i, z_i}.

## Examples

Slice contour on plane:

```wolfram
data = Table[x^2 + y^2 + z^2, {x, -1, 1, 0.1}, {y, -1, 1, 0.1}, {z, -1, 1, 0.1}];
ListSliceContourPlot3D[data, "CenterPlanes"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListSliceContourPlot3D.html) for more details.*