# AffineSpace

`AffineSpace[{p1, ..., pk+1}]` represents the affine space passing through the points pi.

`AffineSpace[p, {v1, ..., vk}]` represents the affine space passing through p in the directions vi.

## Examples

Create a line through two points:

```wolfram
AffineSpace[{{0, 0}, {1, 1}}]
```

Create a plane through a point with direction vectors:

```wolfram
AffineSpace[{0, 0, 0}, {{1, 0, 0}, {0, 1, 0}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AffineSpace.html) for more details.*