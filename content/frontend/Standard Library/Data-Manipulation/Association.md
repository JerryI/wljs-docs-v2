---
title: Association
---

`Association[key1 -> val1, key2 -> val2, ...]` or `<|key1 -> val1, key2 -> val2, ...|>` represents an association between keys and values.

## Examples

Create an association:

```wolfram
assoc = <|"a" -> 1, "b" -> 2, "c" -> 3|>
```

Access values by key:

```wolfram
assoc["b"]
(* 2 *)
```

Get all keys or values:

```wolfram
Keys[assoc]
(* {"a", "b", "c"} *)

Values[assoc]
(* {1, 2, 3} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Association.html) for more details.*