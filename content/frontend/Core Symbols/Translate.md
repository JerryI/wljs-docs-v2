# Translate

`Translate[g, {x, y, ...}]` represents graphics primitives g translated by the vector {x, y, ...}.

`Translate[g, {{x1, y1, ...}, {x2, y2, ...}, ...}]` represents multiple copies of g translated by a collection of vectors.

## Examples

Translate a rectangle:

```wolfram
Graphics[{
  Rectangle[],
  Red, Translate[Rectangle[], {1.5, 0}]
}]
```

Multiple copies:

```wolfram
Graphics[Translate[Disk[{0, 0}, 0.2], {{0, 0}, {1, 0}, {0, 1}}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Translate.html) for more details.*