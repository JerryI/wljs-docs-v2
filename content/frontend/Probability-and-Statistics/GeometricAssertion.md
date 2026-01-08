---
title: GeometricAssertion
---

`GeometricAssertion[obj, prop]` represents the assertion that the geometric object `obj` satisfies `prop`.

- `GeometricAssertion[{obj1, obj2, …}, prop]` represents the assertion that the `obji` satisfy `prop`.
- `GeometricAssertion[objs, prop1, prop2, …]` represents the assertion that `objs` satisfies each of the `propi`.

## Examples

```wolfram
GeometricAssertion[Triangle[{a, b, c}], "Equilateral"]
```

```wolfram
GeometricAssertion[{Line[{a, b}], Line[{c, d}]}, "Parallel"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeometricAssertion.html) for more details.