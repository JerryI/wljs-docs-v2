# MannWhitneyTest

`MannWhitneyTest[{data1, data2}]` tests whether the medians of data1 and data2 are equal.

- `MannWhitneyTest[dspec, μ0]` tests the median difference against μ0.
- `MannWhitneyTest[dspec, μ0, "property"]` returns the value of "property".

## Examples

```wolfram
MannWhitneyTest[{{1, 2, 3, 4}, {3, 4, 5, 6}}]
```

```wolfram
MannWhitneyTest[{{1, 2, 3}, {4, 5, 6}}, 0, "TestStatistic"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MannWhitneyTest.html) for more details.*