---
title: AsymptoticGreaterEqual
---

`AsymptoticGreaterEqual[f, g, x->x*]` gives conditions for f(x)⪰g(x) or f(x)∈Ω(g(x)) as x->x*.

`AsymptoticGreaterEqual[f, g, {x1, ..., xn}->{x1*, ..., xn*}]` gives conditions for f(x1,...,xn)⪰g(x1,...,xn) as {x1,...,xn}->{x1*,...,xn*}.

## Examples

Check asymptotic inequality:

```wolfram
AsymptoticGreaterEqual[x^2, x, x -> Infinity]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AsymptoticGreaterEqual.html) for more details.*