---
title: TreeGraph
---

`TreeGraph[{e1, e2, ...}]` creates a tree graph from edges. The layout is optimized for tree structures.

## Examples

Create tree graphs:

```wolfram
(* Simple tree *)
TreeGraph[{1 -> 2, 1 -> 3, 2 -> 4, 2 -> 5}]

(* With vertex labels *)
TreeGraph[{"root" -> "child1", "root" -> "child2"},
  VertexLabels -> "Name"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeGraph.html) for more details.