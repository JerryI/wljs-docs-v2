---
title: DatePattern
---

`DatePattern[{"e1", "e2", ...}]` represents the characters of a date with elements of type "ei" in `StringExpression`.

`DatePattern[{"e1", "e2", ...}, sep]` allows separators that match the string expression sep.

## Examples

Match a date pattern in a string:

```wolfram
StringMatchQ["2020-01-15", DatePattern[{"Year", "-", "Month", "-", "Day"}]]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DatePattern.html) for more details.*