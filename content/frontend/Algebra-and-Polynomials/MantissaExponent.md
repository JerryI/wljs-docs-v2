---
title: MantissaExponent
---

`MantissaExponent[x]` gives a list containing the mantissa and exponent of a number x.

`MantissaExponent[x,b]` gives the base-b mantissa and exponent of x.

## Examples

Get the mantissa and exponent of a number:

```wolfram
MantissaExponent[1234.5]
(* {0.12345, 4} *)
```

Use base 2:

```wolfram
MantissaExponent[8, 2]
(* {0.5, 4} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MantissaExponent.html) for more details.*