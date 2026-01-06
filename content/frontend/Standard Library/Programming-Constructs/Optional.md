---
title: Optional
---

`patt:def` or `Optional[patt, def]` is a pattern object that represents an expression of the form patt, which, if omitted, should be replaced by the default value def.

## Examples

```wolfram
f[x_, y_:0] := x + y
f[3]
(* 3 *)
```

```wolfram
f[3, 5]
(* 8 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Optional.html) for more details.*