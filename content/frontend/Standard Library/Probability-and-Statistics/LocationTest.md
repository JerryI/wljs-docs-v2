# LocationTest

`LocationTest[data]` tests whether the mean or median of the data is zero.

- `LocationTest[{data1, data2}]` tests whether the means or medians of data1 and data2 are equal.
- `LocationTest[dspec, μ0]` tests a location measure against μ0.
- `LocationTest[dspec, μ0, "property"]` returns the value of "property".

## Examples

Test if mean is zero:
```wolfram
LocationTest[{1.2, -0.5, 0.8, -0.3, 1.1}]
```

Compare two datasets:
```wolfram
LocationTest[{{1, 2, 3}, {4, 5, 6}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LocationTest.html) for more details.*