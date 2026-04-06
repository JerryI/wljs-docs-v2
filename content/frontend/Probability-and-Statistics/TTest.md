---
title: TTest
---

`TTest[data]` tests whether the mean of data is zero.

- `TTest[{data1, data2}]` tests whether the means of data1 and data2 are equal.
- `TTest[dspec, μ0]` tests the mean against μ0.
- `TTest[dspec, μ0, "property"]` returns the value of "property".

## Examples

Test if mean is zero:
```wolfram
TTest[{1.2, -0.5, 0.8, 1.1, -0.3}]
```

Compare two samples:
```wolfram
TTest[{{1, 2, 3, 4}, {3, 4, 5, 6}}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TTest.html) for more details.