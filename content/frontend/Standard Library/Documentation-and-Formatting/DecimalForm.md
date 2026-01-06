---
title: DecimalForm
---

`DecimalForm[expr]` prints with approximate real numbers in expr always given in decimal form, without scientific notation.

`DecimalForm[expr, n]` prints with approximate real numbers given in decimal form to n-digit precision.

`DecimalForm[expr, {n, f}]` prints with approximate real numbers having n digits, with f digits to the right of the decimal point.

## Examples

Display a number in decimal form:

```wolfram
DecimalForm[1.23456789*^-5, 10]
(* 0.0000123457 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DecimalForm.html) for more details.*