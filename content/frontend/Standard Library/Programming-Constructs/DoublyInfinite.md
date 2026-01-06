---
title: DoublyInfinite
---

`DoublyInfinite` is an option for LerchPhi. With `DoublyInfinite -> True`, the summation is taken from -Infinity to Infinity. With `DoublyInfinite -> False`, the summation is taken from zero to Infinity.

## Examples

Use doubly infinite summation:

```wolfram
LerchPhi[1/2, 2, 1, DoublyInfinite -> True]
```

Default summation from zero:

```wolfram
LerchPhi[1/2, 2, 1, DoublyInfinite -> False]
(* Pi^2/6 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DoublyInfinite.html) for more details.*