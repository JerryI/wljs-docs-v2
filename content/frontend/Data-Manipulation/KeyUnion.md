---
title: KeyUnion
---

`KeyUnion[{assoc1, assoc2, …}]` generates a list of associations in which each association has the union of the keys of the `associ`, padding by inserting values of `Missing[…]` if necessary.

- `KeyUnion[{assoc1, assoc2, …}, f]` uses `f[key]` as the value associated with a missing key.

## Examples

```wolfram
KeyUnion[{<|"a" -> 1|>, <|"b" -> 2|>}]
```

```wolfram
KeyUnion[{<|"x" -> 1|>, <|"y" -> 2|>}, 0 &]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KeyUnion.html) for more details.