---
title: FactorTermsList
---

`FactorTermsList[poly]` gives a list where the first element is the overall numerical factor and the second is the polynomial with the factor removed.

## Examples

Get numerical factor and remainder:

```wolfram
FactorTermsList[6x + 12y]
(* {6, x + 2 y} *)
```

With multiple variables:

```wolfram
FactorTermsList[a b x + a b y, {x, y}]
(* {1, a b, x + y} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FactorTermsList.html) for more details.