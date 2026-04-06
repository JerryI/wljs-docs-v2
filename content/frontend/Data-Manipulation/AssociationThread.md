---
title: AssociationThread
---

`AssociationThread[{key1, key2, ...} -> {val1, val2, ...}]` or `AssociationThread[{keys}, {values}]` creates an association pairing corresponding keys and values.

## Examples

Create an association from two lists:

```wolfram
AssociationThread[{"a", "b", "c"}, {1, 2, 3}]
(* <|"a" -> 1, "b" -> 2, "c" -> 3|> *)

(* Using rule form *)
AssociationThread[{"x", "y"} -> {10, 20}]
(* <|"x" -> 10, "y" -> 20|> *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AssociationThread.html) for more details.