---
title: Differences
---

`Differences[list]` gives the successive differences between consecutive elements: `{e2-e1, e3-e2, ...}`.

## Examples

Compute differences:

```wolfram
Differences[{1, 4, 9, 16, 25}]
(* {3, 5, 7, 9} *)

(* Second differences *)
Differences[{1, 4, 9, 16, 25}, 2]
(* {2, 2, 2} *)

(* Inverse of Accumulate *)
Differences[Accumulate[{1, 2, 3, 4, 5}]]
(* {2, 3, 4, 5} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Differences.html) for more details.*