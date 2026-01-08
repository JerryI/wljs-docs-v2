---
title: SameAs
---

`SameAs[y]` is an operator form that yields `x === y` when applied to an expression x.

This is useful for filtering and selecting with functional programming constructs.

## Examples

```wolfram
SameAs[5][5]
```

```wolfram
Select[{1, 2, 5, 3, 5}, SameAs[5]]
```

```wolfram
Cases[{a, b, a, c, a}, SameAs[a]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SameAs.html) for more details.