---
title: EdgeTaggedGraph
---

`EdgeTaggedGraph[{e1, e2, ...}]` yields a graph with edges ej tagged with unique tags.

`EdgeTaggedGraph[{e1, e2, ...} -> {t1, t2, ...}]` yields a graph with edges ej tagged with tj.

## Examples

Create edge-tagged graph:

```wolfram
EdgeTaggedGraph[{1 -> 2, 2 -> 3} -> {"a", "b"}]
```

Auto-tagged edges:

```wolfram
EdgeTaggedGraph[{1 <-> 2, 2 <-> 3, 1 <-> 3}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EdgeTaggedGraph.html) for more details.