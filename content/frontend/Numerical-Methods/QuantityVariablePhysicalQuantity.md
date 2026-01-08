---
title: QuantityVariablePhysicalQuantity
---

`QuantityVariablePhysicalQuantity[var]` returns the physical quantity associated with the quantity variable var.

- `QuantityVariablePhysicalQuantity[var, type]` returns the physical quantity using the format type.

This function extracts the underlying physical quantity from a `QuantityVariable`.

## Examples

```wolfram
QuantityVariablePhysicalQuantity[\[FormalT]]
```

```wolfram
v = QuantityVariable["velocity", "Speed"];
QuantityVariablePhysicalQuantity[v]
```

```wolfram
QuantityVariablePhysicalQuantity[QuantityVariable["m", "Mass"], "Abbreviation"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/QuantityVariablePhysicalQuantity.html) for more details.