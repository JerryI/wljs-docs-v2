---
title: FunctionConvexity
---

`FunctionConvexity[f,{x1,x2,…}]` finds the convexity of the function f with variables x1,x2,… over the reals.

`FunctionConvexity[{f,cons},{x1,x2,…}]` finds the convexity when variables are restricted by the constraints cons representing a convex region.

## Examples

Check if a function is convex:

```wolfram
FunctionConvexity[x^2 + y^2, {x, y}]
(* 1 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionConvexity.html) for more details.*