---
title: BitShiftRight
---

`BitShiftRight[n, k]` shifts the binary bits in the integer n to the right by k places, dropping bits that are shifted past the unit's position.

`BitShiftRight[n]` shifts one bit to the right.

## Examples

Shift bits to the right by 2 positions:

```wolfram
BitShiftRight[20, 2]
(* 5 *)
```

Shift one bit to the right (equivalent to integer division by 2):

```wolfram
BitShiftRight[7]
(* 3 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BitShiftRight.html) for more details.