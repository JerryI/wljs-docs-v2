---
title: PermutationLength
---

`PermutationLength[perm]` returns the number of integers moved by the permutation perm.

The length is the count of elements not in their original positions.

## Examples

```wolfram
PermutationLength[Cycles[{{1, 2, 3}}]]
```

```wolfram
PermutationLength[{2, 3, 1, 4}]
```

```wolfram
PermutationLength[Cycles[{}]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PermutationLength.html) for more details.*