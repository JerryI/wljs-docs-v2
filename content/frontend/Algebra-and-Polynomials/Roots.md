---
title: Roots
---

`Roots[lhs == rhs, var]` yields a disjunction of equations which represent the roots of a polynomial equation.

## Examples

Find polynomial roots:

```wolfram
Roots[x^2 - 4 == 0, x]
(* x == -2 || x == 2 *)
```

Cubic roots:

```wolfram
Roots[x^3 - 1 == 0, x]
(* x == 1 || x == -1/2 - I Sqrt[3]/2 || x == -1/2 + I Sqrt[3]/2 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Roots.html) for more details.