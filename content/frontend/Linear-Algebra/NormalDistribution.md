---
title: NormalDistribution
---

`NormalDistribution[μ, σ]` represents a normal (Gaussian) distribution with mean `μ` and standard deviation `σ`. `NormalDistribution[]` represents the standard normal distribution.

## Examples

Generate random samples from a normal distribution:

```wolfram
RandomVariate[NormalDistribution[0, 1], 5]
(* {0.234, -1.23, 0.891, -0.456, 1.78} *)

(* Compute probability density *)
PDF[NormalDistribution[0, 1], 0]
(* 1/Sqrt[2 Pi] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NormalDistribution.html) for more details.