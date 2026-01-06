# InverseSeries

`InverseSeries[s]` gives a series for the inverse of the function represented by series s.

`InverseSeries[s, x]` uses variable x in the result.

## Examples

Inverse series:

```wolfram
s = Series[Sin[x], {x, 0, 5}];
InverseSeries[s]
```

Verify:

```wolfram
Normal[InverseSeries[s]] /. x -> Sin[y]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseSeries.html) for more details.*