---
title: PadeApproximant
---

`PadeApproximant[expr,{x,x0,{m,n}}]` gives the Padé approximant to expr about the point x=x0, with numerator order m and denominator order n.

`PadeApproximant[expr,{x,x0,n}]` gives the diagonal Padé approximant to expr about the point x=x0 of order n.

## Examples

Compute a Padé approximant of Exp[x]:

```wolfram
PadeApproximant[Exp[x], {x, 0, {2, 2}}]
(* (1 + x/2 + x^2/12)/(1 - x/2 + x^2/12) *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PadeApproximant.html) for more details.