---
title: EndOfString
---

`EndOfString` represents the end of a string for purposes of matching in `StringExpression`.

## Examples

Match at end of string:

```wolfram
StringMatchQ["hello world", __ ~~ "world" ~~ EndOfString]
(* True *)
```

Anchor pattern to end:

```wolfram
StringCases["abc123", DigitCharacter .. ~~ EndOfString]
(* {"123"} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EndOfString.html) for more details.