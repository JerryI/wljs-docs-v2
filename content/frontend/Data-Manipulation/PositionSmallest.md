---
title: PositionSmallest
---

`PositionSmallest[list]` gives the positions of the numerically smallest value in list.

`PositionSmallest[list, n]` gives the positions of the first n smallest values.

`PositionSmallest[list, n, orderfun]` gives the positions of the n smallest values as determined by orderfun.

## Examples

Find position of the smallest element:

```wolfram
PositionSmallest[{5, 2, 8, 1, 9}]
(* {{4}} *)
```

Find positions of the 3 smallest:

```wolfram
PositionSmallest[{5, 2, 8, 1, 9}, 3]
(* {{4}, {2}, {1}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PositionSmallest.html) for more details.