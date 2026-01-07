---
title: StringSplit
---

`StringSplit["string"]` splits a string into a list of substrings separated by whitespace.

`StringSplit["string", patt]` splits at delimiters matching the pattern.

## Examples

Split by whitespace:

```wolfram
StringSplit["Hello World"]
(* {"Hello", "World"} *)
```

Split by a delimiter:

```wolfram
StringSplit["a,b,c", ","]
(* {"a", "b", "c"} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringSplit.html) for more details.*