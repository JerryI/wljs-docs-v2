---
title: TreeElementSizeFunction
---

`TreeElementSizeFunction` is an option for `Tree` and related functions that specifies a function to use to generate sizes for subtree elements.

## Examples

```wolfram
Tree[{a, {b, c}}, TreeElementSizeFunction -> (StringLength[ToString[#]] &)]
```

```wolfram
Tree[x[y, z], TreeElementSizeFunction -> Automatic]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeElementSizeFunction.html) for more details.*