---
title: InterpolatingFunction
---

`InterpolatingFunction[domain, table]` represents an approximate function whose values are found by interpolation.

## Examples

Create from NDSolve:

```wolfram
sol = NDSolve[{y'[x] == y[x], y[0] == 1}, y, {x, 0, 1}];
ifun = y /. First[sol]
(* InterpolatingFunction[...] *)
```

Evaluate:

```wolfram
ifun[0.5]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InterpolatingFunction.html) for more details.