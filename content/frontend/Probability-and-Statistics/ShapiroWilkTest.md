---
title: ShapiroWilkTest
---

`ShapiroWilkTest[data]` tests whether data is normally distributed using the Shapiro–Wilk test.

- `ShapiroWilkTest[data, "property"]` returns the value of "property".

## Examples

```wolfram
data = RandomVariate[NormalDistribution[], 50];
ShapiroWilkTest[data]
```

```wolfram
ShapiroWilkTest[data, "PValue"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ShapiroWilkTest.html) for more details.