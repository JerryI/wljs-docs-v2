---
title: KuiperTest
---

`KuiperTest[data]` tests whether `data` is normally distributed using the Kuiper test.

- `KuiperTest[data, dist]` tests whether `data` is distributed according to `dist` using the Kuiper test.
- `KuiperTest[data, dist, "property"]` returns the value of `"property"`.

## Examples

```wolfram
KuiperTest[RandomReal[1, 100]]
```

```wolfram
KuiperTest[RandomVariate[UniformDistribution[], 100], UniformDistribution[]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KuiperTest.html) for more details.