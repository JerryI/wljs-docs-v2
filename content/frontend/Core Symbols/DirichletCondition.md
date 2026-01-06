# DirichletCondition

`DirichletCondition[beqn, pred]` represents a Dirichlet boundary condition given by equation beqn, satisfied on the part of the boundary of the region given to `NDSolve` and related functions where pred is `True`.

## Examples

Set a Dirichlet boundary condition:

```wolfram
DirichletCondition[u[x, y] == 0, x == 0]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DirichletCondition.html) for more details.*