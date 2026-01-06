---
title: StringTake
---

`StringTake["string", n]` gives a string containing the first n characters.

`StringTake["string", -n]` gives the last n characters.

`StringTake["string", {m, n}]` gives characters m through n.

## Examples

First 5 characters:

```wolfram
StringTake["Hello World", 5]
(* "Hello" *)
```

Last 5 characters:

```wolfram
StringTake["Hello World", -5]
(* "World" *)
```

Substring:

```wolfram
StringTake["Hello World", {7, 11}]
(* "World" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringTake.html) for more details.*