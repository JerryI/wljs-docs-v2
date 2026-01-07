---
title: EdgeLabels
---

`EdgeLabels` is an option and annotation for `Graph` and related functions that specifies what labels and label positions should be used for edges.

## Examples

Add labels to edges:

```wolfram
Graph[{1 -> 2, 2 -> 3}, EdgeLabels -> "Name"]
```

Custom edge labels:

```wolfram
Graph[{1 -> 2, 2 -> 3}, 
  EdgeLabels -> {(1 -> 2) -> "first", (2 -> 3) -> "second"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EdgeLabels.html) for more details.*