# Texture

`Texture[obj]` is a graphics directive that specifies that obj should be used as a texture on faces of polygons and other filled graphics objects.

`Texture[obj, map]` specifies the projection mapping map to assign to vertices of 3D graphics objects.

## Examples

Apply texture to a polygon:

```wolfram
Graphics3D[{
  Texture[ExampleData[{"ColorTexture", "Bricks"}]],
  Polygon[{{0, 0, 0}, {1, 0, 0}, {1, 1, 0}, {0, 1, 0}},
    VertexTextureCoordinates -> {{0, 0}, {1, 0}, {1, 1}, {0, 1}}]
}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Texture.html) for more details.*