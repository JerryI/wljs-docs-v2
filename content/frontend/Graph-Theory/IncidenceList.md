---
title: IncidenceList
---

`IncidenceList[g, v]` gives a list of edges incident to vertex v.

- `IncidenceList[g, patt]` gives a list of edges incident to vertices that match the pattern patt.
- `IncidenceList[g, patt, d]` gives a list of incident edges d steps away.
- `IncidenceList[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

```wolfram
IncidenceList[Graph[{1 -> 2, 2 -> 3, 3 -> 1}], 2]
```

```wolfram
IncidenceList[CompleteGraph[4], 1]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IncidenceList.html) for more details.