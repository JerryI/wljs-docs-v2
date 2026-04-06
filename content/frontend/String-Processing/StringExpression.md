---
title: StringExpression
---

`s1 ~~ s2 ~~ ...` or `StringExpression[s1, s2, ...]` represents a sequence of strings and symbolic string objects si.

## Examples

Create a string pattern:

```wolfram
StringMatchQ["abc123", LetterCharacter ~~ LetterCharacter ~~ LetterCharacter ~~ DigitCharacter ..]
(* True *)
```

Use in StringCases:

```wolfram
StringCases["The cat sat", "c" ~~ __ ~~ "t"]
(* {"cat sat"} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringExpression.html) for more details.