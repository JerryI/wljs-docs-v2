---
title: LinearFractionalTransform
---

`LinearFractionalTransform[m]` gives a TransformationFunction that represents a linear fractional transformation defined by the homogeneous matrix m.

- `LinearFractionalTransform[{a, b, c, d}]` represents a linear fractional transformation that maps r to (a.r+b)/(c.r+d).

## Examples

Simple transformation:

```wolfram
LinearFractionalTransform[{{1, 2}, {0, 1}}][x]
```

Möbius transformation:

```wolfram
LinearFractionalTransform[{1, 0, 1, 1}][z]
(* z/(z + 1) *)
```

Apply to a point:

```wolfram
LinearFractionalTransform[{{2, 1}, {1, 1}}][{3}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinearFractionalTransform.html) for more details.