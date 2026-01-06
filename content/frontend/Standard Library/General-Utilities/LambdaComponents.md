---
title: LambdaComponents
---

`LambdaComponents[g]` gives the lambda components of the graph g.

- `LambdaComponents[g, {v1, v2, ...}]` gives the lambda components that include at least one of the vertices {v1, v2, ...}.
- `LambdaComponents[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

```wolfram
LambdaComponents[Graph[{1 -> 2, 2 -> 3, 3 -> 1}]]
```

```wolfram
LambdaComponents[PetersenGraph[5, 2]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LambdaComponents.html) for more details.*