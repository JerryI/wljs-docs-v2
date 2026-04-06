---
title: RSolveValue
---

`RSolveValue[eqn,expr,n]` gives the value of expr determined by a symbolic solution to the ordinary difference equation eqn with independent variable n.

`RSolveValue[{eqn1,eqn2,…},expr,…]` uses a symbolic solution for a list of difference equations.

`RSolveValue[eqn,expr,{n1,n2,…}]` uses a solution for the partial recurrence equation eqn.

## Examples

Solve a recurrence relation:

```wolfram
RSolveValue[{a[n] == a[n - 1] + a[n - 2], a[0] == 1, a[1] == 1}, a[n], n]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RSolveValue.html) for more details.