---
title: NoneTrue
---

`NoneTrue[{e1, e2, ...}, test]` yields `True` if `test[ei]` is `False` for all elements.

`NoneTrue[test]` represents an operator form that can be applied to an expression.

## Examples

Check if no elements are negative:

```wolfram
NoneTrue[{1, 2, 3, 4}, Negative]
(* True *)
```

Check if none are strings:

```wolfram
NoneTrue[{1, "a", 3}, StringQ]
(* False *)
```

Using operator form:

```wolfram
NoneTrue[PrimeQ][{4, 6, 8, 9}]
(* True *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NoneTrue.html) for more details.