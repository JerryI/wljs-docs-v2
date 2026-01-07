---
title: KeyFreeQ
---

`KeyFreeQ[assoc, form]` yields `True` if no key in the association `assoc` matches `form`, and yields `False` otherwise.

- `KeyFreeQ[form]` represents an operator form of `KeyFreeQ` that can be applied to an expression.

## Examples

```wolfram
KeyFreeQ[<|"a" -> 1, "b" -> 2|>, "c"]
```

```wolfram
KeyFreeQ[<|1 -> "x", 2 -> "y"|>, _String]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KeyFreeQ.html) for more details.*