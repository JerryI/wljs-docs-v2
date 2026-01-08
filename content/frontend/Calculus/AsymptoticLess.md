---
title: AsymptoticLess
---

`AsymptoticLess[f,g,x->x*]` gives conditions for f(x)≺g(x) or f(x)∈o(g(x)) as x->x*.

`AsymptoticLess[f,g,{x1,…,xn}->{x1*,…,xn*}]` gives conditions for f(x1,…,xn)≺g(x1,…,xn) or f(x1,…,xn)∈o(g(x1,…,xn)) as {x1,…,xn}->{x1*,…,xn*}.

## Examples

Check if x grows slower than x^2 as x approaches infinity:

```wolfram
AsymptoticLess[x, x^2, x -> Infinity]
(* True *)
```

Compare growth rates:

```wolfram
AsymptoticLess[Log[x], x, x -> Infinity]
(* True *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AsymptoticLess.html) for more details.