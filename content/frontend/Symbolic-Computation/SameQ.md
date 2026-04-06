---
title: SameQ
---

`lhs === rhs` yields `True` if the expression lhs is identical to rhs, and `False` otherwise.

## Examples

Test for identical expressions:

```wolfram
{1, 2, 3} === {1, 2, 3}
(* True *)
```

Symbolic equality vs identity:

```wolfram
x === x
(* True *)
```

```wolfram
1.0 === 1
(* False *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SameQ.html) for more details.