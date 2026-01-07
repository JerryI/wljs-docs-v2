---
title: RandomChoice
---

`RandomChoice[{e1, e2, ...}]` gives a pseudorandom choice of one of the ei.

`RandomChoice[list, n]` gives a list of n pseudorandom choices (with replacement).

## Examples

Random choice from a list:

```wolfram
RandomChoice[{"apple", "banana", "cherry"}]
(* "banana" *)
```

Multiple random choices:

```wolfram
RandomChoice[{1, 2, 3, 4, 5}, 3]
(* {2, 5, 2} *)
```

Weighted choices:

```wolfram
RandomChoice[{3, 1} -> {"heads", "tails"}, 5]
(* {"heads", "heads", "tails", "heads", "heads"} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RandomChoice.html) for more details.*