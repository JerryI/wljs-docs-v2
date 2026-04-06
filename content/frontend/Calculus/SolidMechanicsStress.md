---
title: SolidMechanicsStress
---

`SolidMechanicsStress[vars, pars, strain]` yields solid mechanics internal stress with variables vars, parameters pars and total strain strain.

- `SolidMechanicsStress[vars, pars, strain, displacement]` yields solid mechanics stress for nonlinear material laws.

## Examples

Compute stress:

```wolfram
SolidMechanicsStress[{u[x, y], v[x, y]}, <|"YoungModulus" -> 200*^9, "PoissonRatio" -> 0.3|>, strain]
```

Linear elastic material:

```wolfram
vars = {u, {x, y}};
pars = <|"YoungModulus" -> 1, "PoissonRatio" -> 0.25|>;
SolidMechanicsStress[vars, pars, Automatic]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SolidMechanicsStress.html) for more details.