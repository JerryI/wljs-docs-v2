---
title: StartOfString
---

`StartOfString` represents the start of a string for purposes of matching in `StringExpression`.

This is similar to `^` in regular expressions.

## Examples

```wolfram
StringMatchQ["hello", StartOfString ~~ "he" ~~ __]
```

```wolfram
StringReplace["test string", StartOfString ~~ x_ :> ToUpperCase[x]]
```

```wolfram
StringCases["abc123", StartOfString ~~ LetterCharacter ..]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StartOfString.html) for more details.*