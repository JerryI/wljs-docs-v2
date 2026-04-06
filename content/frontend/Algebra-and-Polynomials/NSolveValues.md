---
title: NSolveValues
---

`NSolveValues[expr, vars]` attempts to find numerical approximations to the values of *vars* determined by the solutions of the system *expr*.

- `NSolveValues[expr, vars, Reals]` finds solutions over the domain of real numbers.

## Examples

```wolfram
NSolveValues[x^2 - 2 == 0, x]
(* {-1.41421, 1.41421} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NSolveValues.html) for more details.