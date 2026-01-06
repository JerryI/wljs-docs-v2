# KumaraswamyDistribution

`KumaraswamyDistribution[α, β]` represents a Kumaraswamy distribution with shape parameters α and β.

## Examples

Define a Kumaraswamy distribution:

```wolfram
dist = KumaraswamyDistribution[2, 5]
```

Compute the mean:

```wolfram
Mean[KumaraswamyDistribution[2, 5]] // N
(* 0.396825 *)
```

Plot the PDF:

```wolfram
Plot[PDF[KumaraswamyDistribution[2, 5], x], {x, 0, 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KumaraswamyDistribution.html) for more details.*