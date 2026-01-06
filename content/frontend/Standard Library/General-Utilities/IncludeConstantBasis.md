---
title: IncludeConstantBasis
---

`IncludeConstantBasis` is an option for `LinearModelFit` and other fitting functions that specifies whether a constant term should be included if not explicitly given in the list of basis functions.

## Examples

Fit without constant term:
```wolfram
LinearModelFit[data, {x, x^2}, x, IncludeConstantBasis -> False]
```

Include constant term (default):
```wolfram
LinearModelFit[data, {x}, x, IncludeConstantBasis -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IncludeConstantBasis.html) for more details.*