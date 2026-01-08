---
title: AnyTrue
---

`AnyTrue[{e1, e2, ...}, test]` yields `True` if `test[ei]` is `True` for any element.

`AnyTrue[test]` represents an operator form that can be applied to an expression.

## Examples

Check if any element is negative:

```wolfram
AnyTrue[{1, -2, 3, 4}, Negative]
(* True *)
```

Check if any is a string:

```wolfram
AnyTrue[{1, 2, 3}, StringQ]
(* False *)
```

Using operator form:

```wolfram
AnyTrue[PrimeQ][{4, 6, 7, 8}]
(* True *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AnyTrue.html) for more details.