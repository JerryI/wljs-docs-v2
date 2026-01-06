---
title: ParentEdgeLabelFunction
---

`ParentEdgeLabelFunction` is an option for `Tree` and related functions that specifies functions to use to generate edge labels.

## Examples

```wolfram
Tree[{a, {b, c}}, ParentEdgeLabelFunction -> Automatic]
```

```wolfram
Tree[x[y, z], ParentEdgeLabelFunction -> (ToString[#] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParentEdgeLabelFunction.html) for more details.*