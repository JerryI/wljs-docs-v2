---
title: StringPart
---

`StringPart["string", n]` gives the nth character in "string".

`StringPart["string", {n1, n2, ...}]` gives a list of the specified characters.

`StringPart["string", m;;n]` gives a list of the characters from m to n.

## Examples

Get a single character:

```wolfram
StringPart["Hello", 2]
(* "e" *)
```

Get multiple characters:

```wolfram
StringPart["Hello", {1, 3, 5}]
(* {"H", "l", "o"} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringPart.html) for more details.*