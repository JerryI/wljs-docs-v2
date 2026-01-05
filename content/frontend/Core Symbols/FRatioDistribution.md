# FRatioDistribution

`FRatioDistribution[n,m]` represents an F-ratio distribution with n numerator and m denominator degrees of freedom.

## Examples

Create an F-distribution with 5 and 10 degrees of freedom:

```wolfram
dist = FRatioDistribution[5, 10];
Mean[dist]
(* 5/4 *)
```

Plot the PDF:

```wolfram
Plot[PDF[FRatioDistribution[5, 10], x], {x, 0, 5}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FRatioDistribution.html) for more details.*