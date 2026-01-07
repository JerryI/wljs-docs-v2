---
title: Resolve
---

`Resolve[expr]` attempts to resolve expr into a form that eliminates `ForAll` and `Exists` quantifiers.

- `Resolve[expr, dom]` works over the domain dom. Common choices of dom are `Complexes`, `Reals`, and `Booleans`.

## Examples

```wolfram
Resolve[Exists[x, x^2 == 4], Reals]
```

```wolfram
Resolve[ForAll[x, x^2 >= 0], Reals]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Resolve.html) for more details.*