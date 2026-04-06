---
title: JordanDecomposition
---

`JordanDecomposition[m]` yields the Jordan decomposition of a square matrix m as a list `{s, j}` where s is a similarity matrix and j is the Jordan canonical form.

## Examples

Jordan decomposition:

```wolfram
{s, j} = JordanDecomposition[{{5, 4, 2, 1}, {0, 1, -1, -1}, {-1, -1, 3, 0}, {1, 1, -1, 2}}]
```

Simple case:

```wolfram
JordanDecomposition[{{2, 1}, {0, 2}}]
(* {{{1, 0}, {0, 1}}, {{2, 1}, {0, 2}}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/JordanDecomposition.html) for more details.