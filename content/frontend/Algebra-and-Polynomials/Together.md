---
title: Together
---

`Together[expr]` puts terms in a sum over a common denominator, and cancels factors in the result.

## Examples

Combine fractions:

```wolfram
Together[1/x + 1/y]
(* (x + y)/(x y) *)
```

```wolfram
Together[a/b + c/d]
(* (a d + b c)/(b d) *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Together.html) for more details.