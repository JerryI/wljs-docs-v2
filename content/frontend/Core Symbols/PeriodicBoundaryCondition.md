# PeriodicBoundaryCondition

`PeriodicBoundaryCondition[u[x1, ...], pred, f]` represents a periodic boundary condition u(xtarget) = u(f(xtarget)) for all xtarget on the boundary of the region given to NDSolve where pred is True.

- `PeriodicBoundaryCondition[a + b u[x1, ...], pred, f]` represents a generalized periodic boundary condition a + b u(xtarget) = u(f(xtarget)).

## Examples

Solve a PDE with periodic boundary conditions on a square:

```wolfram
NDSolveValue[{
  Laplacian[u[x, y], {x, y}] == 1,
  PeriodicBoundaryCondition[u[x, y], x == 1, 
    Function[{x, y}, {x - 1, y}]],
  DirichletCondition[u[x, y] == 0, y == 0 || y == 1]
}, u, {x, y} \[Element] Rectangle[]]
```

Periodic boundary on both sides:

```wolfram
PeriodicBoundaryCondition[u[x], x == L, 
  TranslationTransform[{-L}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PeriodicBoundaryCondition.html) for more details.*