---
title: FromPolarCoordinates
---

`FromPolarCoordinates[{r,θ}]` gives the {x,y} Cartesian coordinates corresponding to the polar coordinates {r,θ}.

`FromPolarCoordinates[{r,θ1,…,θn-2,ϕ}]` gives the coordinates corresponding to the hyperspherical coordinates {r,θ1,…,θn-2,ϕ}.

## Examples

Convert polar to Cartesian coordinates:

```wolfram
FromPolarCoordinates[{1, Pi/4}]
(* {1/Sqrt[2], 1/Sqrt[2]} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FromPolarCoordinates.html) for more details.