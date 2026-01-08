---
title: Ordering
---

`Ordering[list]` gives the positions that would sort the list. `Ordering[list, n]` gives positions of the `n` smallest elements.

## Examples

Find sorting order:

```wolfram
list = {3, 1, 4, 1, 5, 9}

Ordering[list]
(* {2, 4, 1, 3, 5, 6} *)

(* Verify: list[[Ordering[list]]] is sorted *)
list[[Ordering[list]]]
(* {1, 1, 3, 4, 5, 9} *)

(* Positions of 3 largest *)
Ordering[list, -3]
(* {6, 5, 3} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Ordering.html) for more details.