---
title: GeometricTest
---

`GeometricTest[obj, prop]` tests whether the geometric object `obj` satisfies `prop`.

- `GeometricTest[{obj1, obj2, …}, prop]` tests whether the `obji` satisfy `prop`.
- `GeometricTest[objs, prop1, prop2, …]` tests whether `objs` satisfy each of the `propi`.

## Examples

```wolfram
GeometricTest[Triangle[{{0, 0}, {1, 0}, {1/2, Sqrt[3]/2}}], "Equilateral"]
```

```wolfram
GeometricTest[{Line[{{0, 0}, {1, 1}}], Line[{{0, 1}, {1, 2}}]}, "Parallel"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeometricTest.html) for more details.*