# DiscretePlot3D

`DiscretePlot3D[f, {i, imin, imax}, {j, jmin, jmax}]` generates a 3D plot of f when i runs from imin to imax and j runs from jmin to jmax.

`DiscretePlot3D[f, {i, imin, imax, di}, {j, jmin, jmax, dj}]` uses steps di and dj.

## Examples

Plot a 2D discrete function:

```wolfram
DiscretePlot3D[i + j, {i, 1, 5}, {j, 1, 5}]
```

With bars:

```wolfram
DiscretePlot3D[i * j, {i, 1, 10}, {j, 1, 10}, ExtentSize -> Full]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DiscretePlot3D.html) for more details.*