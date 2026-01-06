# BitShiftLeft

`BitShiftLeft[n, k]` shifts the binary bits in the integer n to the left by k places, padding with zeros on the right.

`BitShiftLeft[n]` shifts one bit to the left.

## Examples

Shift bits to the left by 2 positions:

```wolfram
BitShiftLeft[5, 2]
(* 20 *)
```

Shift one bit to the left (equivalent to multiplying by 2):

```wolfram
BitShiftLeft[7]
(* 14 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BitShiftLeft.html) for more details.*