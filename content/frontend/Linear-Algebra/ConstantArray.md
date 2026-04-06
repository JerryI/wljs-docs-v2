---
title: ConstantArray
---

`ConstantArray[c, n]` generates a list of n copies of the element c.

`ConstantArray[c, {n1, n2, ...}]` generates a nested array of copies of c.

## Examples

Create a list of repeated elements:

```wolfram
ConstantArray[x, 5]
(* {x, x, x, x, x} *)
```

Create a matrix of zeros:

```wolfram
ConstantArray[0, {2, 3}]
(* {{0, 0, 0}, {0, 0, 0}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ConstantArray.html) for more details.