---
title: StringReplacePart
---

`StringReplacePart["string", "snew", {m, n}]` replaces the characters at positions m through n in "string" by "snew".

`StringReplacePart["string", "snew", {{m1, n1}, {m2, n2}, …}]` inserts copies of "snew" at several positions.

`StringReplacePart["string", {"snew1", "snew2", …}, {{m1, n1}, {m2, n2}, …}]` replaces characters at positions mi through ni in "string" by "snewi".

`StringReplacePart["snew", {m, n}]` represents an operator form of StringReplacePart that can be applied to an expression.

## Examples

Replace characters in a string:

```wolfram
StringReplacePart["abcdefgh", "XYZ", {3, 5}]
(* "abXYZfgh" *)
```

Replace at multiple positions:

```wolfram
StringReplacePart["abcdefgh", "*", {{1, 2}, {5, 6}}]
(* "*cd*gh" *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringReplacePart.html) for more details.