---
title: ListVectorDisplacementPlot3D
---

`ListVectorDisplacementPlot3D[{{{vx11, vy11, vz11}, ..., {vx1n, vy1n, vz1n}}, ..., {{vxm1, vym1, vzm1}, ..., {vxmn, vymn, vzmn}}}]` generates a displacement plot from an array of vector displacements {vxij, vyij, vzij}.

- `ListVectorDisplacementPlot3D[{{{x1, y1, z1}, {vx1, vy1, vz1}}, ..., {{xn, yn, zn}, {vxn, vyn, vzn}}}]` generates a displacement plot from displacements {vxi, vyi, vzi} at point {xi, yi, zi}.
- `ListVectorDisplacementPlot3D[..., reg]` plots the displacement over the region reg.

## Examples

```wolfram
ListVectorDisplacementPlot3D[
  Table[{0.1 Sin[x y], 0.1 Cos[x z], 0.1 Sin[y z]}, {x, 5}, {y, 5}, {z, 5}]]
```

```wolfram
ListVectorDisplacementPlot3D[
  Table[{{x, y, z}, {0.1 x, 0.1 y, 0.1 z}}, {x, 0, 2}, {y, 0, 2}, {z, 0, 2}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListVectorDisplacementPlot3D.html) for more details.*