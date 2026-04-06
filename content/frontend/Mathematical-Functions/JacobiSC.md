---
title: JacobiSC
---

`JacobiSC[u, m]` gives the Jacobi elliptic function sc(u|m).

## Examples

Evaluate at a point:

```wolfram
JacobiSC[0.5, 0.3]
```

Plot the function:

```wolfram
Plot[JacobiSC[u, 0.5], {u, 0, 4}]
```

Relation to other Jacobi functions:

```wolfram
JacobiSC[u, m] == JacobiSN[u, m]/JacobiCN[u, m]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/JacobiSC.html) for more details.