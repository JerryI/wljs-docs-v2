---
title: StringPadRight
---

`StringPadRight["string", n]` pads the string on the right with spaces to make it length n.

`StringPadRight["string", n, "padding"]` pads with a custom padding string.

## Examples

Pad with spaces:

```wolfram
StringPadRight["hello", 10]
(* "hello     " *)
```

Pad with custom character:

```wolfram
StringPadRight["test", 10, "-"]
(* "test------" *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringPadRight.html) for more details.