# ContinuedFraction

`ContinuedFraction[x, n]` generates a list of the first n terms in the continued fraction representation of x.

`ContinuedFraction[x]` generates a list of all terms that can be obtained given the precision of x.

## Examples

Continued fraction of Pi:

```wolfram
ContinuedFraction[Pi, 10]
(* {3, 7, 15, 1, 292, 1, 1, 1, 2, 1} *)
```

Continued fraction of a rational:

```wolfram
ContinuedFraction[13/5]
(* {2, 1, 1, 2} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContinuedFraction.html) for more details.*