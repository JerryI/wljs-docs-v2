---
title: StructuralImportance
---

`StructuralImportance[rdist]` gives the structural importances for all components in the `ReliabilityDistribution` rdist.

- `StructuralImportance[fdist]` gives the structural importances for all components in the `FailureDistribution` fdist.
- `StructuralImportance[bexpr, {x1, x2, ...}]` gives the structural importance for the components x1, x2, ... in the Boolean expression bexpr.

## Examples

```wolfram
StructuralImportance[a && (b || c), {a, b, c}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StructuralImportance.html) for more details.