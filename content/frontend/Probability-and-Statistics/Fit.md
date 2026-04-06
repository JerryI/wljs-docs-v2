---
title: Fit
---

`Fit[data, {f1, f2, ...}, x]` finds a least-squares fit of the form $a_1 f_1 + a_2 f_2 + ...$ to the data.

## Examples

Fit data to polynomial models:

```wolfram
data = {{1, 1.2}, {2, 3.9}, {3, 9.1}, {4, 15.8}}

(* Linear fit *)
Fit[data, {1, x}, x]
(* -2.25 + 4.63 x *)

(* Quadratic fit *)
Fit[data, {1, x, x^2}, x]
(* 0.05 + 0.02 x + 1.0 x^2 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Fit.html) for more details.