---
title: Exists
---

`Exists[x, expr]` represents the statement that there exists a value of x for which expr is `True`.

`Exists[x, cond, expr]` states that there exists an x satisfying the condition cond for which expr is `True`.

`Exists[{x1, x2, ...}, expr]` states that there exist values for all the xi for which expr is `True`.

## Examples

Check for existence:

```wolfram
Resolve[Exists[x, x^2 == 4]]
(* True *)
```

Existence with a condition:

```wolfram
Resolve[Exists[x, x > 0, x^2 == 4]]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Exists.html) for more details.*