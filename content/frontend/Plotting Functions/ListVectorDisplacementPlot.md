---
title: ListVectorDisplacementPlot
---

`ListVectorDisplacementPlot[{{{vx11, vy11}, ..., {vx1n, vy1n}}, ..., {{vxm1, vym1}, ..., {vxmn, vymn}}}]` generates a displacement plot from an array of vector displacements {vxij, vyij}.

- `ListVectorDisplacementPlot[{{{x1, y1}, {vx1, vy1}}, ..., {{xn, yn}, {vxn, vyn}}}]` generates a displacement plot from displacements {vxi, vyi} at point `{xi, yi}`.
- `ListVectorDisplacementPlot[{{{{vx11, vy11}, s11}, ...}, ...}]` uses the scalar values sij to color the displaced region.
- `ListVectorDisplacementPlot[..., reg]` plots the displacement over the region reg.

This function visualizes vector displacement fields.

## Examples

```wolfram
data = Table[{0.1 Sin[x], 0.1 Cos[y]}, {x, 0, 2 Pi, 0.5}, {y, 0, 2 Pi, 0.5}];
ListVectorDisplacementPlot[data]
```

```wolfram
ListVectorDisplacementPlot[RandomReal[0.1, {10, 10, 2}]]
```

```wolfram
ListVectorDisplacementPlot[Table[{0.05 x, 0.05 y}, {x, -5, 5}, {y, -5, 5}]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListVectorDisplacementPlot.html) for more details.