---
title: ForAll
---

`ForAll[x, expr]` represents the statement that expr is `True` for all values of x.

`ForAll[x, cond, expr]` states that expr is `True` for all x satisfying condition cond.

## Examples

Universal quantification:

```wolfram
Resolve[ForAll[x, x^2 >= 0], Reals]
(* True *)
```

With a condition:

```wolfram
Resolve[ForAll[x, x > 0, Log[x] < x]]
(* True *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ForAll.html) for more details.