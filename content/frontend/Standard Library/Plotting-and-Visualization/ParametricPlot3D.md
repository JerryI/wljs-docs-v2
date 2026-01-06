---
title: ParametricPlot3D
---

`ParametricPlot3D[{fx, fy, fz}, {u, umin, umax}]` produces a three-dimensional space curve parametrized by variable u.

`ParametricPlot3D[{fx, fy, fz}, {u, umin, umax}, {v, vmin, vmax}]` produces a three-dimensional surface parametrized by u and v.

## Examples

Space curve (helix):

```wolfram
ParametricPlot3D[{Cos[t], Sin[t], t/2}, {t, 0, 4 Pi}]
```

Surface (sphere):

```wolfram
ParametricPlot3D[{Cos[u] Sin[v], Sin[u] Sin[v], Cos[v]}, {u, 0, 2 Pi}, {v, 0, Pi}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParametricPlot3D.html) for more details.*