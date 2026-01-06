# PermutationMin

`PermutationMin[perm]` returns the smallest integer moved by the permutation perm.

## Examples

Smallest moved element:

```wolfram
PermutationMin[Cycles[{{1, 3, 5}}]]
(* 1 *)
```

Larger cycle:

```wolfram
PermutationMin[Cycles[{{4, 7, 9}}]]
(* 4 *)
```

Identity has no minimum:

```wolfram
PermutationMin[Cycles[{}]]
(* Infinity *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PermutationMin.html) for more details.*