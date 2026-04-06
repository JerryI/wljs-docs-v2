---
title: RowReduce
---

`RowReduce[m]` gives the row-reduced form of the matrix m.

## Examples

Row reduce a matrix:

```wolfram
RowReduce[{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}]
(* {{1, 0, -1}, {0, 1, 2}, {0, 0, 0}} *)
```

Full rank matrix:

```wolfram
RowReduce[{{1, 2}, {3, 4}}]
(* {{1, 0}, {0, 1}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RowReduce.html) for more details.