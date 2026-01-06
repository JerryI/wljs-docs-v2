# GraphEmbedding

`GraphEmbedding[g]` gives coordinates of the vertices of the graph `g`.

- `GraphEmbedding[g, "emb"]` gives coordinates of the vertices of the graph `g` using the embedding `"emb"`.
- `GraphEmbedding[g, "emb", dim]` gives coordinates in dimension `dim` of the vertices of the graph `g` using the embedding `"emb"`.

## Examples

```wolfram
GraphEmbedding[CompleteGraph[5]]
```

```wolfram
GraphEmbedding[PetersenGraph[5, 2], "CircularEmbedding"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphEmbedding.html) for more details.*