---
title: ArrayDot
---

`ArrayDot[a, b, k]` computes the product of arrays a and b obtained by summing up products of terms over the last k dimensions of a and the first k dimensions of b.

`ArrayDot[a, b, {{s1, t1}, {s2, t2}, ...}]` computes the product over the pairs {si, ti} of dimensions.

## Examples

Compute the dot product over specified dimensions:

```wolfram
ArrayDot[{{1, 2}, {3, 4}}, {{5, 6}, {7, 8}}, 1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ArrayDot.html) for more details.*