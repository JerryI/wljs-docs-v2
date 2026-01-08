---
title: PermutationList
---

`PermutationList[perm]` returns a permutation list representation of permutation perm.

`PermutationList[perm, len]` returns a permutation list of length len.

## Examples

Convert a permutation to list form:

```wolfram
PermutationList[Cycles[{{1, 3, 2}}]]
(* {3, 1, 2} *)
```

Specify the length:

```wolfram
PermutationList[Cycles[{{1, 3}}], 5]
(* {3, 2, 1, 4, 5} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PermutationList.html) for more details.