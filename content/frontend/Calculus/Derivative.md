---
title: Derivative
---

`f'` represents the derivative of a function f of one argument.

`Derivative[n1, n2, ...][f]` represents a function obtained from f by differentiating n1 times with respect to the first argument, n2 times with respect to the second argument, and so on.

## Examples

First derivative:

```wolfram
f'[x]
(* f'[x] *)
```

Compute derivative of sine:

```wolfram
Sin'[x]
(* Cos[x] *)
```

Second derivative:

```wolfram
Derivative[2][f][x]
(* f''[x] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Derivative.html) for more details.*