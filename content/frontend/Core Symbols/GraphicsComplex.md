# GraphicsComplex

`GraphicsComplex[{pt1, pt2, …}, data]` represents a graphics complex in which coordinates given as integers `i` in graphics primitives in `data` are taken to be `pti`.

## Examples

```wolfram
Graphics[GraphicsComplex[{{0, 0}, {1, 0}, {1, 1}, {0, 1}}, Polygon[{1, 2, 3, 4}]]]
```

```wolfram
Graphics3D[GraphicsComplex[{{0, 0, 0}, {1, 0, 0}, {0.5, 1, 0}, {0.5, 0.5, 1}}, Polygon[{{1, 2, 3}, {1, 2, 4}, {2, 3, 4}, {1, 3, 4}}]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphicsComplex.html) for more details.*