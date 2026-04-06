---
title: LetterCharacter
---

`LetterCharacter` represents a letter character in `StringExpression`.

## Examples

Match any letter character:

```wolfram
StringMatchQ["abc", LetterCharacter ..]
(* True *)
```

Find all letters in a string:

```wolfram
StringCases["a1b2c3", LetterCharacter]
(* {"a", "b", "c"} *)
```

Replace letters:

```wolfram
StringReplace["Hello123", LetterCharacter -> "X"]
(* "XXXXX123" *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LetterCharacter.html) for more details.