---
title: LengthWhile
---

`LengthWhile[list,crit]` gives the number of contiguous elements ei starting at the beginning of list for which crit[ei] is True.

## Examples

Count elements less than 4:

```wolfram
LengthWhile[{1, 2, 3, 5, 2, 1}, # < 4 &]
(* 3 *)
```

Count positive elements from the beginning:

```wolfram
LengthWhile[{1, 2, -3, 4}, Positive]
(* 2 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LengthWhile.html) for more details.*