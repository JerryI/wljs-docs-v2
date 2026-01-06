---
title: BitFlip
---

`BitFlip[n, k]` flips the bit corresponding to the coefficient of 2^k in the integer n.

## Examples

Flip bit position:

```wolfram
BitFlip[5, 1]
(* 7 *)
```

Binary representation:

```wolfram
IntegerDigits[5, 2]
(* {1, 0, 1} *)
IntegerDigits[BitFlip[5, 1], 2]
(* {1, 1, 1} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BitFlip.html) for more details.*