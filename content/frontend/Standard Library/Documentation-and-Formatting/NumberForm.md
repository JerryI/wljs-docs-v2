---
title: NumberForm
---

`NumberForm[expr, n]` displays numbers with `n` digits of precision. `NumberForm[expr, {n, f}]` shows `n` total digits with `f` after the decimal.

## Examples

Format numbers with specified precision:

```wolfram
NumberForm[Pi, 5]
(* 3.1416 *)

NumberForm[123.456789, {6, 3}]
(* 123.457 *)

NumberForm[1234567.89, {10, 2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NumberForm.html) for more details.*