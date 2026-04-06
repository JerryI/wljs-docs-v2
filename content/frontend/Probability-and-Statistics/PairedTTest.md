---
title: PairedTTest
---

`PairedTTest[data]` tests whether the mean of data is zero.

- `PairedTTest[{data1, data2}]` tests whether the mean of data1 – data2 is zero.
- `PairedTTest[dspec, μ0]` tests a location measure against μ0.
- `PairedTTest[dspec, μ0, "property"]` returns the value of "property".

## Examples

```wolfram
data = {{1.2, 1.5}, {2.1, 2.3}, {1.8, 2.0}};
PairedTTest[data]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PairedTTest.html) for more details.