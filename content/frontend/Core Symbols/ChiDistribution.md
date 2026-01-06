# ChiDistribution

`ChiDistribution[ν]` represents a chi distribution with ν degrees of freedom.

## Examples

Create a chi distribution and compute the mean:

```wolfram
Mean[ChiDistribution[4]]
(* (2 Sqrt[2/Pi] Gamma[5/2])/Gamma[2] *)
```

Sample from a chi distribution:

```wolfram
RandomVariate[ChiDistribution[3], 5]
(* {1.92, 2.15, 1.78, 2.33, 1.64} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ChiDistribution.html) for more details.*