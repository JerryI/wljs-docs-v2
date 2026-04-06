---
title: StartOfLine
---

`StartOfLine` represents the start of a line in a string for purposes of matching in `StringExpression`.

## Examples

```wolfram
StringCases["line1\nline2\nline3", StartOfLine ~~ __ ~~ EndOfLine]
```

```wolfram
StringMatchQ["hello", StartOfLine ~~ "hello"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StartOfLine.html) for more details.