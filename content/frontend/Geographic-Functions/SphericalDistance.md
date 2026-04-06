---
title: SphericalDistance
---

`SphericalDistance[{θ1,ϕ1},{θ2,ϕ2}]` returns the great-circle distance between points {θ1,ϕ1} and {θ2,ϕ2} on the surface of a unit sphere.

`SphericalDistance[{θ1,1,θ1,2,…,ϕ1},{θ2,1,θ2,2,…,ϕ2}]` returns the geodesic distance between arbitrary-dimensional points on the surface of a unit hypersphere.

## Examples

Compute the great-circle distance on a unit sphere:

```wolfram
SphericalDistance[{0, 0}, {Pi/2, 0}]
(* Pi/2 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SphericalDistance.html) for more details.