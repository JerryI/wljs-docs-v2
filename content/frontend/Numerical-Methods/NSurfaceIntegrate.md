---
title: NSurfaceIntegrate
---

`NSurfaceIntegrate[f, {x, y, ...} ∈ surface]` computes the numerical scalar surface integral of the function f[x, y, ...] over the surface.

- `NSurfaceIntegrate[{p, q, ...}, {x, y, ...} ∈ surface]` computes the numerical vector surface integral of the vector field {p[x, y, ...], q[x, y, ...], ...}.

## Examples

```wolfram
NSurfaceIntegrate[1, {x, y, z} ∈ Sphere[]]
```

```wolfram
NSurfaceIntegrate[x^2 + y^2, {x, y, z} ∈ Sphere[]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NSurfaceIntegrate.html) for more details.