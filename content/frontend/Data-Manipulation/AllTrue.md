---
title: AllTrue
---

`AllTrue[{e1, e2, ...}, test]` yields `True` if `test[ei]` is `True` for all elements.

`AllTrue[test]` represents an operator form that can be applied to an expression.

## Examples

Check if all elements are positive:

```wolfram
AllTrue[{1, 2, 3, 4}, Positive]
(* True *)
```

Check if all are even:

```wolfram
AllTrue[{2, 4, 5, 8}, EvenQ]
(* False *)
```

Using operator form:

```wolfram
AllTrue[NumericQ][{1, 2.5, 3}]
(* True *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AllTrue.html) for more details.