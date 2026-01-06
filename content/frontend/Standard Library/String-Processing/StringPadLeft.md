---
title: StringPadLeft
---

`StringPadLeft["string", n]` pads the string on the left with spaces to make it length n.

`StringPadLeft["string", n, "padding"]` pads with a custom padding string.

## Examples

Pad with spaces:

```wolfram
StringPadLeft["hello", 10]
(* "     hello" *)
```

Pad with zeros:

```wolfram
StringPadLeft["42", 5, "0"]
(* "00042" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringPadLeft.html) for more details.*