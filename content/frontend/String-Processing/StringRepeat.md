---
title: StringRepeat
---

`StringRepeat["str", n]` creates a string consisting of "str" repeated n times.

`StringRepeat["str", n, max]` limits the result to at most max characters.

## Examples

Repeat a string:

```wolfram
StringRepeat["ab", 5]
(* "ababababab" *)
```

With maximum length:

```wolfram
StringRepeat["hello", 10, 20]
(* "hellohellohelloHello" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringRepeat.html) for more details.*