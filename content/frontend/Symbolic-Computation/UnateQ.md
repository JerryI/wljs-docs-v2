---
title: UnateQ
---

`UnateQ[bexpr, {x1, x2, ...}]` tests whether the Boolean expression bexpr is positive unate in the variables x1, x2, ....

`UnateQ[bexpr, {Not[x1], Not[x2], ...}]` tests whether the Boolean expression bexpr is negative unate in the variables.

## Examples

Test if an expression is positive unate:

```wolfram
UnateQ[a || b, {a, b}]
(* True *)
```

Test for negative unateness:

```wolfram
UnateQ[!a && !b, {Not[a], Not[b]}]
(* True *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UnateQ.html) for more details.