# SignTest

`SignTest[data]` tests whether the median of data is zero.

- `SignTest[{data1, data2}]` tests whether the median of data1 - data2 is zero.
- `SignTest[dspec, μ0]` tests a location measure against μ0.
- `SignTest[dspec, μ0, "property"]` returns the value of "property".

## Examples

Test for zero median:

```wolfram
SignTest[{-1, 2, -3, 4, -5, 6}]
```

Compare two samples:

```wolfram
SignTest[{{1, 2, 3, 4}, {2, 3, 4, 6}}]
```

Get p-value:

```wolfram
SignTest[{1, -1, 2, -2, 3}, 0, "PValue"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SignTest.html) for more details.*