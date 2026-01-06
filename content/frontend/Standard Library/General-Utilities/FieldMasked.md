---
title: FieldMasked
---

`FieldMasked` is an option to InputField that determines whether to mask user input.

## Examples

```wolfram
(* Create a password field with masked input *)
InputField["", String, FieldMasked -> True]

(* Unmasked input (default) *)
InputField["", String, FieldMasked -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FieldMasked.html) for more details.*