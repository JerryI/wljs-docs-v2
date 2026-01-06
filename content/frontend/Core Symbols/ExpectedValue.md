# ExpectedValue

`ExpectedValue[f, list]` gives the expected value of the pure function f with respect to the values in list.

`ExpectedValue[f, dist]` gives the expected value of the pure function f with respect to the symbolic distribution dist.

## Examples

Expected value from a list:

```wolfram
ExpectedValue[#^2 &, {1, 2, 3, 4}]
(* 15/2 *)
```

Expected value from a distribution:

```wolfram
ExpectedValue[x^2, NormalDistribution[0, 1], x]
(* 1 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExpectedValue.html) for more details.*