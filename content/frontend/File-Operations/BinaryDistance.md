---
title: BinaryDistance
---

`BinaryDistance[u, v]` gives the binary distance between vectors u and v, equal to 0 if they are identical and 1 otherwise.

## Examples

Compare identical vectors:

```wolfram
BinaryDistance[{1, 2, 3}, {1, 2, 3}]
(* 0 *)
```

Compare different vectors:

```wolfram
BinaryDistance[{1, 2, 3}, {1, 2, 4}]
(* 1 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BinaryDistance.html) for more details.