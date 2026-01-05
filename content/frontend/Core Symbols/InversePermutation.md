# InversePermutation

`InversePermutation[perm]` returns the inverse of permutation perm.

## Examples

Find the inverse of a permutation list:

```wolfram
InversePermutation[{3, 1, 2}]
(* {2, 3, 1} *)
```

Find the inverse of a cycles permutation:

```wolfram
InversePermutation[Cycles[{{1, 3, 2}}]]
(* Cycles[{{1, 2, 3}}] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InversePermutation.html) for more details.*