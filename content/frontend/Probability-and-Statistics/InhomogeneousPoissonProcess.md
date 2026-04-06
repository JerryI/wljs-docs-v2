---
title: InhomogeneousPoissonProcess
---

`InhomogeneousPoissonProcess[λ[t], t]` represents an inhomogeneous Poisson process with intensity `λ[t]` given as a function of `t`.

## Examples

```wolfram
InhomogeneousPoissonProcess[1 + Sin[t], t]
```

```wolfram
RandomFunction[InhomogeneousPoissonProcess[1 + 0.5 Cos[t], t], {0, 10}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InhomogeneousPoissonProcess.html) for more details.