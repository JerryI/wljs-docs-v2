---
title: FactorTerms
---

`FactorTerms[poly]` pulls out any overall numerical factor in poly.

`FactorTerms[poly, x]` pulls out any overall factor that does not depend on x.

## Examples

Pull out numerical factor:

```wolfram
FactorTerms[2x + 4y]
(* 2 (x + 2 y) *)
```

Factor out terms not depending on x:

```wolfram
FactorTerms[a x + a y, x]
(* a (x + y) *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FactorTerms.html) for more details.