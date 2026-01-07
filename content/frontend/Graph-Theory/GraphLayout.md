---
title: GraphLayout
---

`GraphLayout` is an option to `Graph` and related functions that specifies what layout algorithm to use.

## Examples

Different layouts:

```wolfram
Graph[CycleGraph[10], GraphLayout -> "CircularEmbedding"]
```

Spring electrical layout:

```wolfram
Graph[RandomGraph[{20, 40}], GraphLayout -> "SpringElectricalEmbedding"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphLayout.html) for more details.*