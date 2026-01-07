---
title: StringCases
---

`StringCases["string", patt]` gives a list of substrings that match the pattern.

`StringCases["string", lhs -> rhs]` gives a list of rhs values for matching substrings.

## Examples

Find matching substrings:

```wolfram
StringCases["the cat and the hat", "the"]
(* {"the", "the"} *)
```

With pattern:

```wolfram
StringCases["a1b2c3", DigitCharacter]
(* {"1", "2", "3"} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringCases.html) for more details.*