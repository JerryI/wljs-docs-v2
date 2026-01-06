# HeatFluxValue

`HeatFluxValue[pred, vars, pars]` represents a thermal heat flux boundary condition for PDEs with predicate pred indicating where it applies, with model variables vars and global parameters pars.

- `HeatFluxValue[pred, vars, pars, lkey]` represents a thermal heat flux boundary condition with local parameters specified in pars[lkey].

## Examples

Heat flux boundary condition:

```wolfram
HeatFluxValue[x == 0, {T, {x}}, <|"HeatFlux" -> 100|>]
```

In heat equation:

```wolfram
NDSolveValue[{HeatTransferPDEComponent[{T[t, x], t}, {x}] == 0,
  HeatFluxValue[x == 0, {T, {x}}, <|"HeatFlux" -> 100|>],
  T[0, x] == 0}, T, {t, 0, 1}, {x, 0, 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HeatFluxValue.html) for more details.*