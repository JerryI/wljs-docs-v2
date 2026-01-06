---
title: FunctionInterpolation
---

`FunctionInterpolation[expr,{x,xmin,xmax}]` evaluates expr with x running from xmin to xmax and constructs an InterpolatingFunction object which represents an approximate function corresponding to the result.

`FunctionInterpolation[expr,{x,xmin,xmax},{y,ymin,ymax},…]` constructs an InterpolatingFunction object with several arguments.

## Examples

Create an interpolating function:

```wolfram
f = FunctionInterpolation[Sin[x], {x, 0, 2 Pi}]
(* InterpolatingFunction[...] *)
```

Evaluate the interpolation:

```wolfram
f[1.0]
(* 0.841471 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionInterpolation.html) for more details.*