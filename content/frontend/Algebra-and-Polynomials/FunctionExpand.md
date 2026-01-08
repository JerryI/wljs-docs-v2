---
title: FunctionExpand
---

`FunctionExpand[expr]` tries to expand out special and certain other functions in expr, when possible reducing compound arguments to simpler ones.

- `FunctionExpand[expr, assum]` expands using assumptions.

## Examples

Expand a logarithm of a product:

```wolfram
FunctionExpand[Log[a b], a > 0 && b > 0]
```

Expand special functions:

```wolfram
FunctionExpand[Gamma[n + 1/2], n ∈ Integers && n >= 0]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionExpand.html) for more details.