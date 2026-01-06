---
title: PairedZTest
---

`PairedZTest[data]` tests whether the mean of the data is zero.

- `PairedZTest[{data1, data2}]` tests whether the means of data1 and data2 are equal.
- `PairedZTest[dspec, σ]` tests for zero or equal means assuming a population variance σ.
- `PairedZTest[dspec, σ, μ0]` tests the mean against μ0.
- `PairedZTest[dspec, σ, μ0, "property"]` returns the value of "property".

## Examples

```wolfram
PairedZTest[{1, 2, 3, 4, 5}]
```

```wolfram
PairedZTest[{{1, 2, 3}, {2, 3, 4}}]
```

```wolfram
PairedZTest[data, 1, 0, "PValue"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PairedZTest.html) for more details.*