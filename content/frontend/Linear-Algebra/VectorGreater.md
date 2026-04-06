---
title: VectorGreater
---

`VectorGreater[{x, y}]` yields `True` for vectors of length n if xi > yi for all components 1 ≤ i ≤ n.

`VectorGreater[{x, y}, κ]` yields `True` for x and y if x - y ∈ interior(κ), where κ is a proper convex cone.

## Examples

Check if one vector is componentwise greater than another:

```wolfram
VectorGreater[{{3, 4, 5}, {1, 2, 3}}]
(* True *)
```

```wolfram
VectorGreater[{{3, 2, 5}, {1, 2, 3}}]
(* False *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VectorGreater.html) for more details.