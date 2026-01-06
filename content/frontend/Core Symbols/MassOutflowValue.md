# MassOutflowValue

`MassOutflowValue[pred, vars, pars]` represents a mass outflow boundary condition for PDEs with predicate pred indicating where it applies, with model variables vars and global parameters pars.

- `MassOutflowValue[pred, vars, pars, lkey]` represents a mass outflow boundary condition with local parameters specified in pars[lkey].

This is used in computational fluid dynamics for specifying outflow boundaries.

## Examples

```wolfram
MassOutflowValue[x == 1, {c}, <|"DiffusionCoefficient" -> 1|>]
```

```wolfram
(* Use in NDSolve for transport equations *)
MassOutflowValue[True, {"c"[x, y, t]}, <||>]
```

```wolfram
MassOutflowValue[y == 0, vars, pars, "OutletKey"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MassOutflowValue.html) for more details.*