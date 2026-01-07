---
title: PermutationCycles
---

`PermutationCycles[perm]` gives a disjoint cycle representation of permutation perm.

## Examples

Get the cycle representation of a permutation list:

```wolfram
PermutationCycles[{3, 1, 4, 2}]
(* Cycles[{{1, 3, 4, 2}}] *)
```

Convert a cycle representation to a permutation list:

```wolfram
PermutationList[Cycles[{{1, 3, 4, 2}}]]
(* {3, 1, 4, 2} *)
```

Find cycles for the identity permutation:

```wolfram
PermutationCycles[{1, 2, 3, 4}]
(* Cycles[{}] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PermutationCycles.html) for more details.*