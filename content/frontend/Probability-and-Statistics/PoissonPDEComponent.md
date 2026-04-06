---
title: PoissonPDEComponent
---

`PoissonPDEComponent[vars, pars]` yields a Poisson PDE term ∇²u - f with model variables vars and model parameters pars.

## Examples

Create a Poisson equation component:

```wolfram
PoissonPDEComponent[{u[x, y], {x, y}}, <|"LoadValue" -> 1|>]
```

Solve Poisson's equation on a disk:

```wolfram
eqn = PoissonPDEComponent[{u[x, y], {x, y}}, <|"LoadValue" -> 1|>];
NDSolveValue[{eqn == 0, DirichletCondition[u[x, y] == 0, True]}, 
  u, {x, y} \[Element] Disk[]]
```

Visualize the solution:

```wolfram
sol = NDSolveValue[{eqn == 0, DirichletCondition[u[x, y] == 0, True]}, 
  u, {x, y} \[Element] Disk[]];
Plot3D[sol[x, y], {x, y} \[Element] Disk[]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PoissonPDEComponent.html) for more details.