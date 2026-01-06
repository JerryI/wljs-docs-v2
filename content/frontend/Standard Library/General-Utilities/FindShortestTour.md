# FindShortestTour

`FindShortestTour[{v1, v2, ...}]` attempts to find an ordering of the vi that minimizes the total distance on a tour that visits all the vi once.

`FindShortestTour[graph]` attempts to find an ordering of the vertices in graph that minimizes the total length when visiting each vertex once.

`FindShortestTour[{v1, v2, ...}, j, k]` finds an ordering of the vi that minimizes the total distance on a path from vj to vk.

`FindShortestTour[graph, s, t]` finds an ordering of the vertices that minimizes the total length on a path from s to t.

## Examples

Find shortest tour through points:

```wolfram
pts = RandomReal[1, {10, 2}];
FindShortestTour[pts]
(* {length, {ordering}} *)
```

Tour in a graph:

```wolfram
FindShortestTour[CompleteGraph[5]]
(* {5, {1, 2, 3, 4, 5, 1}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindShortestTour.html) for more details.*