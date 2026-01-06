---
title: Series
---

`Series[f, {x, x0, n}]` generates a power series expansion for f about the point x=x0 to order n.

## Examples

Taylor series of Sin:

```wolfram
Series[Sin[x], {x, 0, 5}]
(* x - x^3/6 + x^5/120 + O[x]^6 *)
```

Series of Exp:

```wolfram
Series[Exp[x], {x, 0, 4}]
(* 1 + x + x^2/2 + x^3/6 + x^4/24 + O[x]^5 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Series.html) for more details.*