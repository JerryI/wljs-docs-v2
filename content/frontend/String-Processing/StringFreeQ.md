---
title: StringFreeQ
---

`StringFreeQ["string", patt]` yields `True` if no substring matches the pattern, and `False` otherwise.

`StringFreeQ[patt]` represents an operator form that can be applied to an expression.

## Examples

Check if string is free of a pattern:

```wolfram
StringFreeQ["Hello World", "xyz"]
(* True *)
```

Check for digit characters:

```wolfram
StringFreeQ["Hello World", DigitCharacter]
(* True *)
```

```wolfram
StringFreeQ["Hello123", DigitCharacter]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringFreeQ.html) for more details.*