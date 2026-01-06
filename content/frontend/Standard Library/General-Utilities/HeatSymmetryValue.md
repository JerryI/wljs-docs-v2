---
title: HeatSymmetryValue
---

`HeatSymmetryValue[pred, vars, pars]` represents a thermal symmetry boundary condition for PDEs with predicate pred indicating where it applies, with model variables vars and global parameters pars.

- `HeatSymmetryValue[pred, vars, pars, lkey]` represents a thermal symmetry boundary condition with local parameters specified in pars[lkey].

## Examples

```wolfram
HeatSymmetryValue[x == 0, {T[x, t], t}, <|"AmbientTemperature" -> 300|>]
```

```wolfram
HeatSymmetryValue[y == 1, vars, pars]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HeatSymmetryValue.html) for more details.*