---
title: ElidedForms
---

`ElidedForms` is an option to TextString and related functions that specifies which expressions should be elided.

## Examples

```wolfram
TextString[{1, Graphics[Circle[]]}, ElidedForms -> Graphics]
(* "{1, <<Graphics>>}" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ElidedForms.html) for more details.*