# PDF

`PDF[dist, x]` gives the probability density function for distribution dist evaluated at x.

## Examples

PDF of normal distribution:

```wolfram
PDF[NormalDistribution[0, 1], 0]
(* 1/Sqrt[2 Pi] *)
```

PDF as a pure function:

```wolfram
pdf = PDF[NormalDistribution[0, 1]];
pdf[1.0]
(* 0.2419 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PDF.html) for more details.*