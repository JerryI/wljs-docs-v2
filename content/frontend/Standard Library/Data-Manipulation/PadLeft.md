---
title: PadLeft
---

`PadLeft[list, n]` pads a list to length `n` with zeros on the left. `PadLeft[list, n, x]` uses element `x` for padding.

## Examples

Pad lists on the left:

```wolfram
PadLeft[{1, 2, 3}, 6]
(* {0, 0, 0, 1, 2, 3} *)

PadLeft[{1, 2, 3}, 6, "x"]
(* {"x", "x", "x", 1, 2, 3} *)

(* Cyclic padding *)
PadLeft[{1, 2}, 7, {a, b, c}]
(* {a, b, c, a, b, 1, 2} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PadLeft.html) for more details.*