---
title: FindGeometricTransform
---

`FindGeometricTransform[pts1,pts2]` finds a geometric transformation that aligns positions specified by pts2 with pts1, returning the alignment error together with the transformation function.

`FindGeometricTransform[ref,{pts1,pts2,…}]` finds geometric transformations that align each of the ptsi with ref.

`FindGeometricTransform[{pts1,pts2,…}]` finds geometric transformations that align each of the ptsi with pts1.

## Examples

Find a transformation between two point sets:

```wolfram
FindGeometricTransform[{{0, 0}, {1, 0}, {0, 1}}, {{1, 1}, {2, 1}, {1, 2}}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindGeometricTransform.html) for more details.