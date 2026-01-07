---
title: NeumannValue
---

`NeumannValue[val, pred]` represents a Neumann boundary value val, specified on the part of the boundary of the region given to `NDSolve` and related functions where pred is True.

## Examples

```wolfram
NDSolve[{Laplacian[u[x, y], {x, y}] == 0, 
  NeumannValue[1, x == 0], DirichletCondition[u[x, y] == 0, x == 1]}, 
  u, {x, 0, 1}, {y, 0, 1}]
```

```wolfram
NeumannValue[0, y == 0 || y == 1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NeumannValue.html) for more details.*