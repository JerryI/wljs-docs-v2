---
title: TreeElementShapeFunction
---

`TreeElementShapeFunction` is an option for `Tree` and related functions that specifies a function to use to generate primitives for rendering subtree elements.

## Examples

```wolfram
Tree[{1, {2, 3}}, TreeElementShapeFunction -> (Disk[#, 0.1] &)]
```

```wolfram
Tree[{a, {b, c}}, TreeElementShapeFunction -> "Rectangle"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeElementShapeFunction.html) for more details.*