# Analytic

`Analytic` is an option for `Limit` and `Series`. With `Analytic -> True`, unrecognized functions are treated as analytic and processed using Taylor series expansions; with `Analytic -> False`, Taylor series are not used unless the function is recognized as analytic.

## Examples

Use the Analytic option with Series:

```wolfram
Series[f[x], {x, 0, 2}, Analytic -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Analytic.html) for more details.*