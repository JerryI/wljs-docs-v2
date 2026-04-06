---
title: LogLikelihood
---

`LogLikelihood[dist, {x1, x2, ...}]` gives the log‐likelihood function for observations x1, x2, … from the distribution dist.

- `LogLikelihood[proc, {{t1, x1}, {t2, x2}, ...}]` gives the log-likelihood function for the observations xi at time ti from the process proc.
- `LogLikelihood[proc, {path1, path2, ...}]` gives the log-likelihood function for the observations from path1, path2, … from the process proc.

## Examples

```wolfram
LogLikelihood[NormalDistribution[μ, σ], {1, 2, 3, 4}]
```

```wolfram
LogLikelihood[PoissonDistribution[λ], {0, 1, 2, 1, 3}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LogLikelihood.html) for more details.