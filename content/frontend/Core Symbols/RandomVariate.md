# RandomVariate

`RandomVariate[dist]` gives a pseudorandom variate from the symbolic distribution dist. `RandomVariate[dist, n]` gives a list of n variates.

## Examples

Sample from a normal distribution:

```wolfram
RandomVariate[NormalDistribution[]]
(* 0.543821 *)
```

Generate multiple samples from an exponential distribution:

```wolfram
RandomVariate[ExponentialDistribution[1], 5]
(* {0.234, 1.872, 0.651, 2.103, 0.412} *)
```

Sample from a Poisson distribution:

```wolfram
RandomVariate[PoissonDistribution[3], 4]
(* {2, 4, 3, 1} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RandomVariate.html) for more details.*