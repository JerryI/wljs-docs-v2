---
title: CosineDistance
---

`CosineDistance[u, v]` gives the angular cosine distance between vectors u and v.

## Examples

Compute the cosine distance between two vectors:

```wolfram
CosineDistance[{1, 0}, {0, 1}]
(* 1 *)
```

Parallel vectors have zero cosine distance:

```wolfram
CosineDistance[{1, 2, 3}, {2, 4, 6}]
(* 0 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CosineDistance.html) for more details.