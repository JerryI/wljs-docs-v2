# LogisticDistribution

`LogisticDistribution[μ,β]` represents a logistic distribution with mean μ and scale parameter β.

`LogisticDistribution[]` represents a logistic distribution with mean 0 and scale parameter 1.

## Examples

Create a logistic distribution and compute its variance:

```wolfram
dist = LogisticDistribution[0, 1];
Variance[dist]
(* π^2/3 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LogisticDistribution.html) for more details.*