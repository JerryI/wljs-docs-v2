---
title: WinsorizedMean
---

`WinsorizedMean[list, f]` gives the mean of the elements in list after replacing the fraction f of the smallest and largest elements by the remaining extreme values.

- `WinsorizedMean[list, {f1, f2}]` gives the mean when the fraction f1 of the smallest elements and the fraction f2 of the largest elements are replaced.
- `WinsorizedMean[list]` gives the 5% winsorized mean WinsorizedMean[list, 0.05].
- `WinsorizedMean[dist, ...]` gives the winsorized mean of a univariate distribution dist.

## Examples

```wolfram
WinsorizedMean[{1, 2, 3, 4, 100}, 0.2]
```

```wolfram
WinsorizedMean[{1, 2, 3, 4, 5, 6, 7, 8, 9, 100}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WinsorizedMean.html) for more details.