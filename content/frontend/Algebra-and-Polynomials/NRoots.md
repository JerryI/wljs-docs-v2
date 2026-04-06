---
title: NRoots
---

`NRoots[lhs == rhs, var]` yields numerical approximations to the roots of a polynomial equation.

## Examples

Numeric roots:

```wolfram
NRoots[x^3 - 2 == 0, x]
(* x == 1.26 || x == -0.63 - 1.09 I || x == -0.63 + 1.09 I *)
```

Quadratic roots:

```wolfram
NRoots[x^2 - 5x + 3 == 0, x]
(* x == 0.697 || x == 4.303 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NRoots.html) for more details.