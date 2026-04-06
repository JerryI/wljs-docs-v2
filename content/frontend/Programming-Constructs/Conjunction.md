---
title: Conjunction
---

`Conjunction[expr, {a1, a2, ...}]` gives the conjunction of expr over all choices of the Boolean variables ai.

## Examples

Conjunction over Boolean variables:

```wolfram
Conjunction[a || b, {a, b}]
(* True *)
```

Test if expr is always true:

```wolfram
Conjunction[a && !a, {a}]
(* False *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Conjunction.html) for more details.