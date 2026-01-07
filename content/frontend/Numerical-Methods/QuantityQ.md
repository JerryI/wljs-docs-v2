---
title: QuantityQ
---

`QuantityQ[expr]` gives `True` if expr is a `Quantity` with valid arguments, and `False` otherwise.

- `QuantityQ[expr, dims]` gives `True` if expr is a `Quantity` with physical dimensions dims, and `False` otherwise.

## Examples

```wolfram
QuantityQ[Quantity[5, "Meters"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/QuantityQ.html) for more details.*