# Skewness

`Skewness[data]` gives the coefficient of skewness estimate for the elements in data.

- `Skewness[dist]` gives the coefficient of skewness for the distribution dist.

## Examples

Skewness of data:

```wolfram
Skewness[{1, 2, 3, 4, 5, 10}]
```

Skewness of a distribution:

```wolfram
Skewness[NormalDistribution[0, 1]]
(* 0 *)
```

Positively skewed distribution:

```wolfram
Skewness[ExponentialDistribution[1]]
(* 2 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Skewness.html) for more details.*