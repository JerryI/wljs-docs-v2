---
title: LogRankTest
---

`LogRankTest[{data1, data2, ...}]` tests for equal hazard rates among the datai using a log-rank type test.

- `LogRankTest[{data1, data2, ...}, wspec]` performs a weighted log-rank test with weights wspec.
- `LogRankTest[{data1, ...}, wspec, "property"]` returns the value of "property".

## Examples

Compare survival data:

```wolfram
data1 = {1, 2, 3, 5, 7};
data2 = {2, 4, 6, 8, 10};
LogRankTest[{data1, data2}]
```

Get p-value:

```wolfram
LogRankTest[{data1, data2}, Automatic, "PValue"]
```

Weighted test:

```wolfram
LogRankTest[{data1, data2}, "Prentice"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LogRankTest.html) for more details.