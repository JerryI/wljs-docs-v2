---
title: Multinomial
---

`Multinomial[n1, n2, ...]` gives the multinomial coefficient (n1+n2+...)! / (n1! n2! ...).

## Examples

Multinomial coefficient:

```wolfram
Multinomial[2, 3, 4]
(* 1260 *)
```

Equivalent to binomial for two arguments:

```wolfram
Multinomial[3, 2]
(* 10 - same as Binomial[5, 3] *)
```

Counting permutations with repetition:

```wolfram
Multinomial[2, 2, 2]
(* 90 - ways to arrange AABBCC *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Multinomial.html) for more details.*