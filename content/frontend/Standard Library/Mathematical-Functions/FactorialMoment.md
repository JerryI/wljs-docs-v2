# FactorialMoment

`FactorialMoment[data, r]` gives the order r factorial moment of data.

`FactorialMoment[dist, r]` gives the factorial moment of the distribution dist.

## Examples

Factorial moment of data:

```wolfram
FactorialMoment[{1, 2, 3, 4, 5}, 2]
(* 6 *)
```

Factorial moment of a distribution:

```wolfram
FactorialMoment[PoissonDistribution[3], 2]
(* 9 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FactorialMoment.html) for more details.*