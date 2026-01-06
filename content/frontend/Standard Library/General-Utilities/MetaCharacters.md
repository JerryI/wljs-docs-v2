---
title: MetaCharacters
---

`MetaCharacters` is an option to `StringPosition`. With `MetaCharacters -> None`, no strings have special meanings. `MetaCharacters -> {c1, c2, c3}` specifies the metacharacters for pattern escape, single character matching and multiple character matching. `MetaCharacters -> Automatic` is equivalent to `MetaCharacters -> {"\\", ".", "*"}`.

## Examples

```wolfram
StringPosition["a.b*c", ".", MetaCharacters -> None]
(* {{2, 2}} *)
```

```wolfram
StringPosition["abc", ".", MetaCharacters -> Automatic]
(* {{1, 1}, {2, 2}, {3, 3}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MetaCharacters.html) for more details.*