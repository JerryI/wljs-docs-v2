---
title: TensorReduce
---

`TensorReduce[texpr]` attempts to return a canonical form for the symbolic tensor expression texpr.

## Examples

Simplify a tensor expression:

```wolfram
TensorReduce[TensorProduct[a, b] + TensorProduct[b, a], Assumptions -> {a \[Element] Vectors[3], b \[Element] Vectors[3]}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TensorReduce.html) for more details.