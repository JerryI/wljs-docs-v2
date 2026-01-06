# MainSolve

`MainSolve[eqns]` is the underlying function for transforming systems of equations. `Solve` and `Eliminate` call it. The equations must be of the form lhs == rhs. They can be combined using && and ||.

- `MainSolve[eqns, vars, elim, rest]` attempts to rearrange the equations eqns so as to solve for the variables vars, and eliminate the variables elim.

## Examples

```wolfram
MainSolve[x + y == 1]
```

```wolfram
MainSolve[x^2 == 4, {x}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MainSolve.html) for more details.*