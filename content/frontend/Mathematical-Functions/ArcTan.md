---
title: ArcTan
---

`ArcTan[z]` gives the arc tangent (inverse tangent) of `z`. `ArcTan[x, y]` gives the arc tangent of `y/x`, taking into account which quadrant the point is in.

## Examples

Compute arc tangent values:

```wolfram
ArcTan[1]
(* Pi/4 *)

(* Two-argument form for quadrant-aware computation *)
ArcTan[1, 1]
(* Pi/4 *)

ArcTan[-1, 1]
(* 3 Pi/4 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ArcTan.html) for more details.