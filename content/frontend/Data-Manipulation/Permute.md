---
title: Permute
---

`Permute[expr, perm]` permutes the positions of the elements of expr according to the permutation perm.

- `Permute[expr, gr]` returns the list of permuted forms of expr under the elements of the permutation group gr.

This function rearranges elements according to a specified permutation.

## Examples

```wolfram
Permute[{a, b, c, d}, Cycles[{{1, 3}}]]
```

```wolfram
Permute[{1, 2, 3, 4}, {2, 3, 4, 1}]
```

```wolfram
Permute[{a, b, c}, SymmetricGroup[3]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Permute.html) for more details.