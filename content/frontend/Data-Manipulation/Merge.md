---
title: Merge
---

`Merge[{assoc1, assoc2, ...}, f]` merges associations, using `f` to combine values with the same key.

## Examples

Merge associations with conflict resolution:

```wolfram
a1 = <|"x" -> 1, "y" -> 2|>
a2 = <|"y" -> 3, "z" -> 4|>

(* Sum values with same key *)
Merge[{a1, a2}, Total]
(* <|"x" -> 1, "y" -> 5, "z" -> 4|> *)

(* Keep first value *)
Merge[{a1, a2}, First]
(* <|"x" -> 1, "y" -> 2, "z" -> 4|> *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Merge.html) for more details.