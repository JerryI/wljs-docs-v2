---
title: FindCurvePath
---

`FindCurvePath[{{x1,y1},{x2,y2},…}]` gives an ordering of the {xi,yi} that corresponds to one or more smooth curves.

## Examples

Find a curve path through scattered points:

```wolfram
pts = {{0, 0}, {1, 1}, {0.5, 0.5}, {2, 2}, {1.5, 1.5}};
FindCurvePath[pts]
(* {{1, 3, 2, 5, 4}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindCurvePath.html) for more details.