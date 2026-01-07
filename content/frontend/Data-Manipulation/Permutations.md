---
title: Permutations
---

`Permutations[list]` generates all permutations of the elements. `Permutations[list, {n}]` gives permutations of exactly `n` elements.

## Examples

Generate permutations:

```wolfram
Permutations[{a, b, c}]
(* {{a, b, c}, {a, c, b}, {b, a, c}, {b, c, a}, {c, a, b}, {c, b, a}} *)

(* 2-element permutations *)
Permutations[{1, 2, 3}, {2}]
(* {{1, 2}, {1, 3}, {2, 1}, {2, 3}, {3, 1}, {3, 2}} *)

Length[Permutations[Range[5]]]
(* 120 = 5! *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Permutations.html) for more details.*