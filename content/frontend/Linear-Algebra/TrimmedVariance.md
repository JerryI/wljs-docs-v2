---
title: TrimmedVariance
---

`TrimmedVariance[list,f]` gives the variance of the elements in list after dropping a fraction f of the smallest and largest elements.

`TrimmedVariance[list,{f1,f2}]` gives the variance when a fraction f1 of the smallest elements and a fraction f2 of the largest elements are removed.

`TrimmedVariance[list]` gives the 5% trimmed variance TrimmedVariance[list,0.05].

`TrimmedVariance[dist,…]` gives the trimmed variance of a univariate distribution dist.

## Examples

Compute trimmed variance with 10% trimming:

```wolfram
TrimmedVariance[{1, 2, 3, 4, 100}, 0.1]
(* 1.25 *)
```

Default 5% trimmed variance:

```wolfram
TrimmedVariance[Range[100]]
(* 841.25 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TrimmedVariance.html) for more details.