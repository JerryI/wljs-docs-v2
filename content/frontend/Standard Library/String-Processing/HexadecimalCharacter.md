---
title: HexadecimalCharacter
---

`HexadecimalCharacter` represents a hexadecimal digit character 0–9, a–f, A–F in StringExpression.

## Examples

Match hex digits:

```wolfram
StringMatchQ["A", HexadecimalCharacter]
(* True *)
```

Extract hex characters:

```wolfram
StringCases["Color: #FF00AA", HexadecimalCharacter]
(* {"F", "F", "0", "0", "A", "A"} *)
```

Match hex string:

```wolfram
StringMatchQ["deadbeef", HexadecimalCharacter ..]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HexadecimalCharacter.html) for more details.*