---
title: SphericalAngle
---

`SphericalAngle[{θ0, ϕ0} -> {{θ1, ϕ1}, {θ2, ϕ2}}]` gives the signed angle in radians between the great circles through point {θ0, ϕ0} and points {θ1, ϕ1} and {θ2, ϕ2}.

- `SphericalAngle[p -> {q, r}]` gives the unsigned angle for points *p*, *q*, *r* of the form {θ1, θ2, ..., θn-1, ϕ} on an n-dimensional hypersphere.
- `SphericalAngle[p -> {{q1, r1}, ..., {qn, rn}}]` gives a list of angles between the great circles from point *p* through points *qi* and *ri*.
- `SphericalAngle[{p1, ..., pn} -> {{q1, r1}, ..., {qn, rn}}]` gives a list of angles between the great circles from point *pi* through points *qi* and *ri*.

## Examples

```wolfram
SphericalAngle[{0, 0} -> {{Pi/4, 0}, {0, Pi/4}}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SphericalAngle.html) for more details.