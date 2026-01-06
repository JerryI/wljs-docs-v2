# Subfactorial

`Subfactorial[n]` gives the number of permutations of n objects that leave no object fixed (derangements).

## Examples

Number of derangements:

```wolfram
Subfactorial[4]
(* 9 *)
```

Subfactorial sequence:

```wolfram
Table[Subfactorial[n], {n, 0, 6}]
(* {1, 0, 1, 2, 9, 44, 265} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Subfactorial.html) for more details.*