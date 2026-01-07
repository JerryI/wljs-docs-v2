---
title: PermutationPower
---

`PermutationPower[perm, n]` gives the nth permutation power of the permutation perm.

## Examples

Square of a permutation:

```wolfram
PermutationPower[Cycles[{{1, 2, 3}}], 2]
(* Cycles[{{1, 3, 2}}] *)
```

Cube returns identity:

```wolfram
PermutationPower[Cycles[{{1, 2, 3}}], 3]
(* Cycles[{}] *)
```

Negative power:

```wolfram
PermutationPower[Cycles[{{1, 2, 3}}], -1]
(* Cycles[{{1, 3, 2}}] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PermutationPower.html) for more details.*