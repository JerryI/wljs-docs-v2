---
title: VertexTextureCoordinates
---

`VertexTextureCoordinates` is an option for graphics primitives that specifies the texture coordinates to assign to vertices.

## Examples

```wolfram
Graphics3D[{Texture[ExampleData[{"TestImage", "Lena"}]], 
  Polygon[{{0, 0, 0}, {1, 0, 0}, {1, 1, 0}, {0, 1, 0}}, 
    VertexTextureCoordinates -> {{0, 0}, {1, 0}, {1, 1}, {0, 1}}]}]
```

```wolfram
Options[Polygon, VertexTextureCoordinates]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexTextureCoordinates.html) for more details.*