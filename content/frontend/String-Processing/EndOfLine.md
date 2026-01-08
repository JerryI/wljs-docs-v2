---
title: EndOfLine
---

`EndOfLine` represents the end of a line in a string for purposes of matching in `StringExpression`.

## Examples

Match at end of line:

```wolfram
StringCases["line1\nline2\n", __ ~~ EndOfLine]
(* {"line1", "line2"} *)
```

Replace end of lines:

```wolfram
StringReplace["abc\ndef", EndOfLine -> ";"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EndOfLine.html) for more details.