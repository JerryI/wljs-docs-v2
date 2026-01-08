---
title: RankedMin
---

`RankedMin[list, n]` gives the nth smallest element in list.

`RankedMin[list, -n]` gives the nth largest element in list.

## Examples

Get the 2nd smallest element:

```wolfram
RankedMin[{3, 1, 4, 1, 5, 9, 2, 6}, 2]
(* 1 *)
```

Get the 3rd largest element:

```wolfram
RankedMin[{3, 1, 4, 1, 5, 9, 2, 6}, -3]
(* 5 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RankedMin.html) for more details.