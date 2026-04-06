---
title: ArrayReshape
---

`ArrayReshape[list, dims]` arranges the elements of list into a rectangular array with dimensions dims.

`ArrayReshape[list, dims, padding]` uses the specified padding if list does not contain enough elements.

## Examples

Reshape a flat list into a matrix:

```wolfram
ArrayReshape[Range[6], {2, 3}]
(* {{1, 2, 3}, {4, 5, 6}} *)
```

Reshape with padding:

```wolfram
ArrayReshape[{1, 2, 3}, {2, 3}, 0]
(* {{1, 2, 3}, {0, 0, 0}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ArrayReshape.html) for more details.