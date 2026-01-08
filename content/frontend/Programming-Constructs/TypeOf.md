---
title: TypeOf
---

`TypeOf[expr]` gives the type of expr without evaluating it.

- `TypeOf[expr, Typed[x, ty]]` assumes that instances of x in expr have type ty.
- `TypeOf[expr, {Typed[x1, ty1], Typed[x2, ty2], ...}]` assumes that xi has type tyi.
- `TypeOf[expr, decls]` uses declarations decls.

## Examples

```wolfram
TypeOf[1 + 2]
```

```wolfram
TypeOf[x + 1, Typed[x, "Integer64"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TypeOf.html) for more details.*