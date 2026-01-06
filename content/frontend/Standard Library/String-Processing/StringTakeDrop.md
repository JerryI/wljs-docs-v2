---
title: StringTakeDrop
---

`StringTakeDrop["string", n]` gives a pair of strings containing the first n characters in "string" and the remaining characters.

- `StringTakeDrop["string", seq]` gives the pair `{StringTake["string", seq], StringDrop["string", seq]}`.

## Examples

Split a string at position 5:

```wolfram
StringTakeDrop["Hello World", 5]
(* {"Hello", " World"} *)
```

Take and drop last 3 characters:

```wolfram
StringTakeDrop["abcdefgh", -3]
(* {"abcde", "fgh"} *)
```

With range specification:

```wolfram
StringTakeDrop["Hello World", {1, 5}]
(* {"Hello", " World"} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringTakeDrop.html) for more details.*