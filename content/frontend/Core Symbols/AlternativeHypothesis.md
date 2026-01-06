# AlternativeHypothesis

`AlternativeHypothesis` is an option for hypothesis testing functions like `LocationTest` that specifies the alternative hypothesis.

## Examples

Perform a one-sided test:

```wolfram
LocationTest[{1, 2, 3, 4, 5}, 2, AlternativeHypothesis -> "Greater"]
```

Test if mean is not equal to specified value:

```wolfram
LocationTest[data, mu, AlternativeHypothesis -> "Unequal"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AlternativeHypothesis.html) for more details.*