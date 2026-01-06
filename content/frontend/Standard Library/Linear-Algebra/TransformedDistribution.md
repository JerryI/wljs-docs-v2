# TransformedDistribution

`TransformedDistribution[expr,x⟨dist]` represents the transformed distribution of expr where the random variable x follows the distribution dist.

`TransformedDistribution[expr,{x1,x2,…}⟨dist]` represents the transformed distribution of expr where {x1,x2,…} follows the multivariate distribution dist.

`TransformedDistribution[expr,x⟨proc]` represents the transformed distribution where expr contains expressions of the form x[t], referring the value at time t from the random process proc.

`TransformedDistribution[expr,{x1⟨dist1,x2⟨dist2,…}]` represents a transformed distribution where x1, x2, … are independent and follow the distributions dist1, dist2, ….

## Examples

Create a transformed distribution:

```wolfram
dist = TransformedDistribution[x^2, x \[Distributed] NormalDistribution[]];
Mean[dist]
(* 1 *)
```

Transform multiple independent variables:

```wolfram
TransformedDistribution[x + y, {x \[Distributed] NormalDistribution[], y \[Distributed] NormalDistribution[]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TransformedDistribution.html) for more details.*