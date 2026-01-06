---
title: MassTransferValue
---

`MassTransferValue[pred, vars, pars]` represents a mass transfer boundary condition for PDEs with predicate pred indicating where it applies, with model variables vars and global parameters pars.

- `MassTransferValue[pred, vars, pars, lkey]` represents a mass transfer boundary condition with local parameters specified in pars[lkey].

## Examples

Mass transfer condition:

```wolfram
MassTransferValue[x == 1, {c, {x}}, <|"MassTransferCoefficient" -> 1, "AmbientConcentration" -> 0|>]
```

In diffusion equation:

```wolfram
NDSolveValue[{MassTransportPDEComponent[{c[t, x], t}, {x}] == 0,
  MassTransferValue[x == 1, {c, {x}}, <|"MassTransferCoefficient" -> 1|>],
  c[0, x] == 1}, c, {t, 0, 1}, {x, 0, 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MassTransferValue.html) for more details.*