# SolidBoundaryLoadValue

`SolidBoundaryLoadValue[pred, vars, pars]` represents a boundary load condition for PDEs with predicate pred indicating where it applies, with model variables vars and global parameters pars.

- `SolidBoundaryLoadValue[pred, vars, pars, lkeys]` represents a boundary load condition with local parameters specified in pars[lkey].

## Examples

Define a boundary load:
```wolfram
SolidBoundaryLoadValue[x == 1, {u[x, y], {x, y}}, <|"Load" -> {100, 0}|>]
```

Use in a structural mechanics problem:
```wolfram
NDSolve[{equations, SolidBoundaryLoadValue[...]}, u, region]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SolidBoundaryLoadValue.html) for more details.*