---
title: HighlightGraph
---

`HighlightGraph[g, {a1, a2, ...}]` highlights vertices, edges, or subgraphs ai of the graph g.

## Examples

Highlight specific vertices:

```wolfram
HighlightGraph[Graph[{1 -> 2, 2 -> 3, 3 -> 1}], {1, 2}]
```

Highlight edges with style:

```wolfram
HighlightGraph[CompleteGraph[5], {1 <-> 2, 2 <-> 3}, VertexLabels -> Automatic]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HighlightGraph.html) for more details.