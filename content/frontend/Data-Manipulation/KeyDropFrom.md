---
title: KeyDropFrom
---

`KeyDropFrom[a,key]` changes the association a by dropping the element with the specified key.

`KeyDropFrom[a,{key1,key2,...}]` drops the elements with keys keyi.

## Examples

```wolfram
assoc = <|"a" -> 1, "b" -> 2, "c" -> 3|>;
KeyDropFrom[assoc, "b"];
assoc
(* <|"a" -> 1, "c" -> 3|> *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KeyDropFrom.html) for more details.