---
title: DigitCount
---

`DigitCount[n, b, d]` gives the number of d digits in the base-b representation of n.

`DigitCount[n, b]` gives a list of the numbers of 1, 2, ..., b-1, 0 digits in base b.

`DigitCount[n]` gives counts of 1, 2, ..., 9, 0 digits in base 10.

## Examples

Count 1s in binary:

```wolfram
DigitCount[255, 2, 1]
(* 8 *)
```

Digit frequency in base 10:

```wolfram
DigitCount[123456789]
(* {1, 1, 1, 1, 1, 1, 1, 1, 1, 0} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DigitCount.html) for more details.