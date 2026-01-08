---
title: MinLimit
---

`MinLimit[f, x -> x*]` gives the min limit as x approaches x*.

- `MinLimit[f, {x1 -> x1*, ..., xn -> xn*}]` gives the nested min limit.
- `MinLimit[f, {x1, ..., xn} -> {x1*, ..., xn*}]` gives the multivariate min limit.

## Examples

```wolfram
MinLimit[Sin[x]/x, x -> 0]
```

```wolfram
MinLimit[x^2 + y, {x -> 0, y -> 1}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MinLimit.html) for more details.