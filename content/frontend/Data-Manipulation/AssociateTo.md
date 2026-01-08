---
title: AssociateTo
---

`AssociateTo[a, key -> val]` changes the association a by adding the key-value pair key->val.

`AssociateTo[a, {key1 -> val1, key2 -> val2, ...}]` adds all key-value pairs keyi->vali.

## Examples

Add a key-value pair:

```wolfram
a = <|"x" -> 1|>;
AssociateTo[a, "y" -> 2]
(* <|"x" -> 1, "y" -> 2|> *)
```

Add multiple pairs:

```wolfram
AssociateTo[a, {"z" -> 3, "w" -> 4}]
(* <|"x" -> 1, "y" -> 2, "z" -> 3, "w" -> 4|> *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AssociateTo.html) for more details.