---
title: TrimmedMean
---

`TrimmedMean[list, f]` gives the mean of the elements in list after dropping a fraction f of the smallest and largest elements.

- `TrimmedMean[list, {f1, f2}]` gives the mean when a fraction f1 of the smallest elements and a fraction f2 of the largest elements are removed.
- `TrimmedMean[list]` gives the 5% trimmed mean `TrimmedMean[list, 0.05]`.
- `TrimmedMean[dist, ...]` gives the trimmed mean of a univariate distribution dist.

## Examples

5% trimmed mean (default):

```wolfram
TrimmedMean[{1, 2, 3, 4, 5, 100}]
```

10% trimmed mean:

```wolfram
TrimmedMean[{1, 2, 3, 4, 5, 6, 7, 8, 9, 100}, 0.1]
```

Asymmetric trimming:

```wolfram
TrimmedMean[Range[100], {0.1, 0.2}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TrimmedMean.html) for more details.