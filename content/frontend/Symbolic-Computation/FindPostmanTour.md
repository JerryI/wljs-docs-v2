---
title: FindPostmanTour
---

`FindPostmanTour[g]` finds a Chinese postman tour in the graph g of minimal length.

- `FindPostmanTour[g,k]` finds at most k Chinese postman tours. 
- `FindPostmanTour[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

```wolfram
(* Find a postman tour *)
g = Graph[{1 <-> 2, 2 <-> 3, 3 <-> 4, 4 <-> 1, 2 <-> 4}];
FindPostmanTour[g]

(* Find multiple tours *)
FindPostmanTour[g, 3]

(* Visualize the tour *)
tour = FindPostmanTour[g];
HighlightGraph[g, tour]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindPostmanTour.html) for more details.