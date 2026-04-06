---
title: SourcePDETerm
---

`SourcePDETerm[vars, f]` represents a source term f with source coefficient f and model variables vars.

- `SourcePDETerm[vars, f, pars]` uses model parameters pars.

## Examples

Create a simple source term:
```wolfram
SourcePDETerm[{u[x, y], {x, y}}, 1]
```

Use a source term in a PDE system:
```wolfram
op = SourcePDETerm[{u[x, y], {x, y}}, x^2 + y^2];
NDSolveValue[{op == 0, DirichletCondition[u[x, y] == 0, True]}, u, {x, y} \[Element] Disk[]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SourcePDETerm.html) for more details.