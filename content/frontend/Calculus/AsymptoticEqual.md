---
title: AsymptoticEqual
---

`AsymptoticEqual[f, g, x -> x*]` gives conditions for f(x) ≍ g(x) or f(x) ∈ Θ(g(x)) as x -> x*.

`AsymptoticEqual[f, g, {x1, ..., xn} -> {x1*, ..., xn*}]` gives conditions for the multivariate case.

## Examples

Test asymptotic equality:

```wolfram
AsymptoticEqual[x^2 + x, x^2, x -> Infinity]
(* True *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AsymptoticEqual.html) for more details.