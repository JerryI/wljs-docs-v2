---
title: MedianDeviation
---

`MedianDeviation[data]` gives the median absolute deviation from the median of the elements in data.

## Examples

Calculate the median deviation of a list:

```wolfram
MedianDeviation[{1, 2, 3, 4, 100}]
(* 1 *)
```

More robust than standard deviation for outliers:

```wolfram
{StandardDeviation[{1, 2, 3, 4, 100}], MedianDeviation[{1, 2, 3, 4, 100}]}
```

Apply to a matrix (column-wise):

```wolfram
MedianDeviation[{{1, 2}, {3, 4}, {5, 100}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MedianDeviation.html) for more details.*