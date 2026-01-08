---
title: StringInsert
---

`StringInsert["string", "snew", n]` inserts "snew" starting at position n.

`StringInsert["string", "snew", -n]` inserts at position n from the end.

## Examples

Insert at position:

```wolfram
StringInsert["HelloWorld", " ", 6]
(* "Hello World" *)
```

Insert from end:

```wolfram
StringInsert["Hello", "!", -1]
(* "Hello!" *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringInsert.html) for more details.