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

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ShapiroWilkTest.html) for more details.