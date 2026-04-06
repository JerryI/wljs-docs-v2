---
title: FixedPoint
---

`FixedPoint[f, expr]` starts with expr, then applies f repeatedly until the result no longer changes.

`FixedPoint[f, expr, n]` stops after at most n steps.

## Examples

Find a fixed point:

```wolfram
FixedPoint[Cos, 1.0]
(* 0.739085 *)
```

Newton's method for square root:

```wolfram
FixedPoint[(# + 2/#)/2 &, 1.0]
(* 1.41421 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FixedPoint.html) for more details.