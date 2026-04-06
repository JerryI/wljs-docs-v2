---
title: SurfaceIntegrate
---

`SurfaceIntegrate[f, {x, y, ...} ∈ surface]` computes the scalar surface integral of the function f[x, y, ...] over the surface.

- `SurfaceIntegrate[{p, q, ...}, {x, y, ...} ∈ surface]` computes the vector surface integral of the vector field {p[x, y, ...], q[x, y, ...], ...}.

## Examples

Surface area of a sphere:

```wolfram
SurfaceIntegrate[1, {x, y, z} ∈ Sphere[]]
(* 4 π *)
```

Flux through a hemisphere:

```wolfram
SurfaceIntegrate[{x, y, z}, {x, y, z} ∈ 
  ImplicitRegion[x^2 + y^2 + z^2 == 1 && z >= 0, {x, y, z}]]
```

Integrate a scalar field over a surface:

```wolfram
SurfaceIntegrate[x^2, {x, y, z} ∈ Sphere[{0, 0, 0}, 2]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SurfaceIntegrate.html) for more details.