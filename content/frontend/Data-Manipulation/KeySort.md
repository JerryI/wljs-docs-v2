---
title: KeySort
---

`KeySort[assoc]` orders the elements of an association by sorting its keys.

`KeySort[assoc, p]` orders the elements of an association using the ordering function p.

## Examples

Sort by keys:

```wolfram
KeySort[<|"c" -> 3, "a" -> 1, "b" -> 2|>]
(* <|"a" -> 1, "b" -> 2, "c" -> 3|> *)
```

Reverse sort:

```wolfram
KeySort[<|1 -> "a", 3 -> "c", 2 -> "b"|>, Greater]
(* <|3 -> "c", 2 -> "b", 1 -> "a"|> *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KeySort.html) for more details.