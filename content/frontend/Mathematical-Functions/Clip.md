---
title: Clip
---

`Clip[x]` clips `x` to the range $[-1, 1]$. `Clip[x, {min, max}]` clips to the range `[min, max]`.

## Examples

Clip values to a range:

```wolfram
Clip[5]
(* 1 *)

Clip[-0.5]
(* -0.5 *)

Clip[15, {0, 10}]
(* 10 *)

(* Clip a list *)
Clip[{-5, 3, 12}, {0, 10}]
(* {0, 3, 10} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Clip.html) for more details.*