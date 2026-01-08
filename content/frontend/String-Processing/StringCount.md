---
title: StringCount
---

`StringCount["string", "sub"]` counts occurrences of a substring.

`StringCount["string", patt]` counts substrings matching a pattern.

## Examples

Count occurrences:

```wolfram
StringCount["mississippi", "ss"]
(* 2 *)
```

Count pattern matches:

```wolfram
StringCount["abc123def456", DigitCharacter]
(* 6 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringCount.html) for more details.