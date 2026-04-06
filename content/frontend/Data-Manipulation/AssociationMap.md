---
title: AssociationMap
---

`AssociationMap[f, {key1, key2, ...}]` creates the association `<|key1 -> f[key1], key2 -> f[key2], ...|>`.

`AssociationMap[f, <|key1 -> val1, key2 -> val2, ...|>]` creates `<|f[key1 -> val1], f[key2 -> val2], ...|>`.

## Examples

Map a function to create values:

```wolfram
AssociationMap[StringLength, {"cat", "dog", "elephant"}]
(* <|"cat" -> 3, "dog" -> 3, "elephant" -> 8|> *)
```

Transform key-value pairs:

```wolfram
AssociationMap[Reverse, <|a -> 1, b -> 2|>]
(* <|1 -> a, 2 -> b|> *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AssociationMap.html) for more details.