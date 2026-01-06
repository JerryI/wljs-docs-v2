---
title: ExternalDataCharacterEncoding
---

`ExternalDataCharacterEncoding` is a global option that specifies the character encoding used in reading and writing plain text data outside of the Wolfram System.

## Examples

```wolfram
(* Check the current external data character encoding *)
$CharacterEncoding

(* Set an option for external encoding *)
SetOptions[ExternalEvaluate, ExternalDataCharacterEncoding -> "UTF-8"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExternalDataCharacterEncoding.html) for more details.*