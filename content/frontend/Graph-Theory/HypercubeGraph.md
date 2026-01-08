---
title: HypercubeGraph
---

`HypercubeGraph[n]` gives the n-dimensional hypercube graph Qₙ.

## Examples

3D hypercube (cube):

```wolfram
HypercubeGraph[3]
```

4D hypercube (tesseract):

```wolfram
HypercubeGraph[4]
```

Count vertices and edges:

```wolfram
g = HypercubeGraph[5];
{VertexCount[g], EdgeCount[g]}
(* {32, 80} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HypercubeGraph.html) for more details.