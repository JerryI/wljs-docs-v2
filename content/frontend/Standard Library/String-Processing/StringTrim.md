---
title: StringTrim
---

`StringTrim["string"]` trims whitespace from the beginning and end of the string.

`StringTrim["string", patt]` trims substrings matching patt.

## Examples

Trim whitespace:

```wolfram
StringTrim["  Hello World  "]
(* "Hello World" *)
```

Trim specific characters:

```wolfram
StringTrim["###hello###", "#" ..]
(* "hello" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringTrim.html) for more details.*