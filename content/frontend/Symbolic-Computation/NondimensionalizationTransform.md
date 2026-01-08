---
title: NondimensionalizationTransform
---

`NondimensionalizationTransform[eq, ovars, fvars]` nondimensionalizes *eq*, replacing original variables *ovars* with the variables *fvars*.

- `NondimensionalizationTransform[eq, ovars, fvars, prop]` returns a property associated with the nondimensionalization of *eq*.

## Examples

```wolfram
NondimensionalizationTransform[x^2 + y^2 == 1, {x, y}, {u, v}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NondimensionalizationTransform.html) for more details.*