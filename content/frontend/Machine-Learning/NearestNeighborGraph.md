---
title: NearestNeighborGraph
---

`NearestNeighborGraph[{elem1,elem2,...}]` gives a graph with vertices elem1,elem2,... and edges connecting each elemi to its nearest neighbors.

`NearestNeighborGraph[{elem1,elem2,...},k]` gives a graph connecting each elemi to its k nearest neighbors.

`NearestNeighborGraph[{elem1,elem2,...},{k,r}]` gives a graph connecting each elemi to at most k nearest vertices within radius r of elemi.

`NearestNeighborGraph[{elem1,elem2,...},{All,r}]` gives a graph connecting each elemi to all vertices within radius r of elemi.

## Examples

Create a nearest neighbor graph from 2D points:

```wolfram
NearestNeighborGraph[RandomReal[1, {10, 2}], 2]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NearestNeighborGraph.html) for more details.