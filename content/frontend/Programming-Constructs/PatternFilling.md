---
title: PatternFilling
---

`PatternFilling[obj]` is a two-dimensional graphics directive specifying that obj should be used to fill faces of polygons and other filled graphics objects.

- `PatternFilling["name"]` uses the specified pattern "name".
- `PatternFilling[obj, size]` specifies the size of the object obj.
- `PatternFilling[obj, size, {dx, dy}]` moves the object obj by the offset {dx, dy}.

## Examples

```wolfram
Graphics[{PatternFilling["Checkerboard"], Rectangle[]}]
```

```wolfram
Graphics[{PatternFilling[Graphics[Circle[]], 20], Polygon[{{0, 0}, {1, 0}, {0.5, 1}}]}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PatternFilling.html) for more details.