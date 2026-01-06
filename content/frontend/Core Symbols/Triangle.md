# Triangle

`Triangle[{p1, p2, p3}]` represents a filled triangle with corner points p1, p2, and p3.

`Triangle[{{p11, p12, p13}, ...}]` represents a collection of triangles.

## Examples

Draw a triangle:

```wolfram
Graphics[Triangle[{{0, 0}, {1, 0}, {0.5, 1}}]]
```

Colored triangle:

```wolfram
Graphics[{Blue, EdgeForm[Black], Triangle[{{0, 0}, {2, 0}, {1, 1.5}}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Triangle.html) for more details.*