---
title: KeyValuePattern
---

`KeyValuePattern[{patt1, ...}]` is a pattern object that represents an association or list of rules that includes elements matching each of the patti.

## Examples

Match an association with specific keys:

```wolfram
MatchQ[<|"a" -> 1, "b" -> 2|>, KeyValuePattern[{"a" -> _}]]
(* True *)
```

Use in pattern matching:

```wolfram
Cases[{<|"x" -> 1|>, <|"y" -> 2|>, <|"x" -> 3|>}, KeyValuePattern[{"x" -> _}]]
(* {<|"x" -> 1|>, <|"x" -> 3|>} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KeyValuePattern.html) for more details.*