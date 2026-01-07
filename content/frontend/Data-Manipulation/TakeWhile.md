---
title: TakeWhile
---

`TakeWhile[list, crit]` gives elements ei from the beginning of list, continuing so long as crit[ei] is True.

## Examples

Take while positive:

```wolfram
TakeWhile[{1, 2, 3, -1, 4, 5}, Positive]
(* {1, 2, 3} *)
```

Take while less than 5:

```wolfram
TakeWhile[{1, 3, 5, 7, 9}, # < 5 &]
(* {1, 3} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TakeWhile.html) for more details.*