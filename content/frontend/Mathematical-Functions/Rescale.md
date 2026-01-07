---
title: Rescale
---

`Rescale[x, {min, max}]` rescales `x` from the range `[min, max]` to `[0, 1]`. `Rescale[x, {min, max}, {ymin, ymax}]` rescales to `[ymin, ymax]`.

## Examples

Rescale values:

```wolfram
Rescale[5, {0, 10}]
(* 0.5 *)

Rescale[5, {0, 10}, {0, 100}]
(* 50 *)

(* Rescale a list to 0-1 *)
data = {10, 20, 30, 40, 50}
Rescale[data]
(* {0., 0.25, 0.5, 0.75, 1.} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Rescale.html) for more details.*