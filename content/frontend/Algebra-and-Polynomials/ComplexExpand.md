---
title: ComplexExpand
---

`ComplexExpand[expr]` expands expr assuming that all variables are real.

`ComplexExpand[expr, {x1, x2, ...}]` expands expr assuming that variables matching any of the xi are complex.

## Examples

Expand assuming real variables:

```wolfram
ComplexExpand[Re[a + b I]]
(* a *)
```

Expand with complex variable:

```wolfram
ComplexExpand[Abs[z]^2, {z}]
(* Re[z]^2 + Im[z]^2 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ComplexExpand.html) for more details.