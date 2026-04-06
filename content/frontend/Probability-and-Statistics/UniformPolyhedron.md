---
title: UniformPolyhedron
---

`UniformPolyhedron["name"]` gives the uniform polyhedron with the given name.

- `UniformPolyhedron[{n, m}]` gives the uniform polyhedron with n sides of each face and m faces meeting at each vertex point.
- `UniformPolyhedron[{r, θ, ϕ}, ...]` rescales the uniform polyhedron by a factor r and rotates by an angle θ with respect to the z axis and angle ϕ with respect to the y axis.
- `UniformPolyhedron[{x, y, z}, {r, θ, ϕ}, ...]` centers the uniform polyhedron at {x, y, z}.

## Examples

Create a dodecahedron:
```wolfram
UniformPolyhedron["Dodecahedron"]
```

Create by face/vertex specification:
```wolfram
UniformPolyhedron[{5, 3}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UniformPolyhedron.html) for more details.