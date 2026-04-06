---
title: KeyValueMap
---

`KeyValueMap[f, assoc]` applies `f` to each key-value pair and returns a list of results `{f[key1, val1], f[key2, val2], ...}`.

## Examples

Transform an association into a list:

```wolfram
assoc = <|"a" -> 1, "b" -> 2, "c" -> 3|>

KeyValueMap[#1 <> ToString[#2] &, assoc]
(* {"a1", "b2", "c3"} *)

KeyValueMap[Rule, assoc]
(* {"a" -> 1, "b" -> 2, "c" -> 3} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KeyValueMap.html) for more details.