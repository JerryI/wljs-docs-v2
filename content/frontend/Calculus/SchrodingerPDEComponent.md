---
title: SchrodingerPDEComponent
---

`SchrodingerPDEComponent[vars, pars]` yields a Schrödinger PDE term with model variables vars and model parameters pars.

## Examples

Schrödinger equation component:

```wolfram
SchrodingerPDEComponent[{ψ[x, t], t}, {x}]
```

Time-independent Schrödinger equation:

```wolfram
SchrodingerPDEComponent[{ψ, x}, <|"Mass" -> 1, "PlanckConstant" -> 1|>]
```

In NDSolve:

```wolfram
NDSolve[{SchrodingerPDEComponent[{u[x, t], t}, {x}] == 0,
  u[x, 0] == Exp[-x^2]}, u, {x, -5, 5}, {t, 0, 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SchrodingerPDEComponent.html) for more details.*