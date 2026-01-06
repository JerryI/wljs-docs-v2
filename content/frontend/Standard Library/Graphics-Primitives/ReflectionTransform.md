---
title: ReflectionTransform
---

`ReflectionTransform[v]` gives a TransformationFunction that represents a reflection in a mirror through the origin, normal to the vector v.

- `ReflectionTransform[v, p]` gives a reflection in a mirror through the point p, normal to the vector v.

## Examples

Reflect in x-axis:

```wolfram
ReflectionTransform[{0, 1}][{1, 2}]
(* {1, -2} *)
```

3D reflection:

```wolfram
ReflectionTransform[{0, 0, 1}][{1, 2, 3}]
(* {1, 2, -3} *)
```

Reflection through a point:

```wolfram
ReflectionTransform[{1, 0}, {1, 0}][{0, 0}]
(* {2, 0} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReflectionTransform.html) for more details.*