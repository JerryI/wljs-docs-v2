# SignificanceLevel

`SignificanceLevel` is an option to `VarianceTest` and similar functions that controls cutoffs for diagnostic tests as well as test conclusions.

## Examples

Set significance level for t-test:

```wolfram
TTest[{1.1, 0.9, 1.0, 1.2}, 1, SignificanceLevel -> 0.05]
```

Custom significance level:

```wolfram
VarianceTest[data, 1, SignificanceLevel -> 0.01]
```

Use in hypothesis testing:

```wolfram
LocationTest[data, 0, SignificanceLevel -> 0.10]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SignificanceLevel.html) for more details.*