---
title: KolmogorovSmirnovTest
---

`KolmogorovSmirnovTest[data]` tests whether `data` is normally distributed using the Kolmogorov–Smirnov test.

- `KolmogorovSmirnovTest[data, dist]` tests whether `data` is distributed according to `dist` using the Kolmogorov–Smirnov test.
- `KolmogorovSmirnovTest[data, dist, "property"]` returns the value of `"property"`.

## Examples

```wolfram
KolmogorovSmirnovTest[RandomReal[1, 100]]
```

```wolfram
KolmogorovSmirnovTest[RandomVariate[NormalDistribution[], 100], NormalDistribution[]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KolmogorovSmirnovTest.html) for more details.