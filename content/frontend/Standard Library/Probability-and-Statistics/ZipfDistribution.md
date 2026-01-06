# ZipfDistribution

`ZipfDistribution[ρ]` represents a zeta distribution with parameter ρ.

`ZipfDistribution[n, ρ]` represents a Zipf distribution with range n.

## Examples

Sample from Zipf distribution:

```wolfram
RandomVariate[ZipfDistribution[2], 10]
(* {1, 1, 2, 1, 1, 3, 1, 1, 1, 2} *)
```

Probability mass function:

```wolfram
PDF[ZipfDistribution[100, 1], k]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ZipfDistribution.html) for more details.*