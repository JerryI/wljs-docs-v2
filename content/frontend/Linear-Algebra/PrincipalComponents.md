---
title: PrincipalComponents
---

`PrincipalComponents[matrix]` transforms elements of matrix into unscaled principal components.

## Examples

Compute principal components:

```wolfram
data = {{1, 2}, {2, 3}, {3, 5}, {4, 6}};
PrincipalComponents[data]
```

Reduce dimensionality:

```wolfram
data = RandomReal[1, {100, 5}];
pc = PrincipalComponents[data];
pc[[All, 1 ;; 2]] (* First two principal components *)
```

Analyze variance:

```wolfram
Variance /@ Transpose[PrincipalComponents[RandomReal[1, {100, 3}]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PrincipalComponents.html) for more details.*