---
title: WinsorizedVariance
---

`WinsorizedVariance[list, f]` gives the variance of the elements in list after replacing the fraction f of the smallest and largest elements by the remaining extreme values.

- `WinsorizedVariance[list, {f1, f2}]` gives the variance when the fraction f1 of the smallest elements and the fraction f2 of the largest elements are replaced by the remaining extreme values.
- `WinsorizedVariance[list]` gives the 5% winsorized variance `WinsorizedVariance[list, 0.05]`.
- `WinsorizedVariance[dist, ...]` gives the winsorized variance of a univariate distribution dist.

Winsorization is a robust statistical technique that reduces the influence of outliers.

## Examples

```wolfram
WinsorizedVariance[{1, 2, 3, 4, 5, 6, 7, 8, 9, 100}]
```

```wolfram
WinsorizedVariance[{1, 2, 3, 4, 5, 6, 7, 8, 9, 100}, 0.1]
```

```wolfram
WinsorizedVariance[NormalDistribution[], 0.1]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WinsorizedVariance.html) for more details.*