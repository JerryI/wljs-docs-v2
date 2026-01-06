---
title: GraphicsGrid
---

`GraphicsGrid[{{g11, g12, ...}, ...}]` generates a graphic in which the gij are laid out in a two-dimensional grid.

## Examples

Create a 2x2 grid of plots:

```wolfram
GraphicsGrid[{{
  Plot[Sin[x], {x, 0, 2 Pi}],
  Plot[Cos[x], {x, 0, 2 Pi}]
}, {
  Plot[Tan[x], {x, -Pi/3, Pi/3}],
  Plot[Cot[x], {x, 0.5, 2.5}]
}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphicsGrid.html) for more details.*