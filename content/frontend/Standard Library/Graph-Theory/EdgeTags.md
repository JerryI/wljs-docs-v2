---
title: EdgeTags
---

`EdgeTags[g]` gives the list of tags for all edges in the graph g.

`EdgeTags[g, {u, v}]` gives the list of tags for edges between u and v.

## Examples

Get edge tags:

```wolfram
g = EdgeTaggedGraph[{1 -> 2, 2 -> 3} -> {"a", "b"}];
EdgeTags[g]
(* {"a", "b"} *)
```

Tags between specific vertices:

```wolfram
EdgeTags[g, {1, 2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EdgeTags.html) for more details.*