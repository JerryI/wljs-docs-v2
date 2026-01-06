---
title: ForAllType
---

`ForAllType[x, type]` represents a type parameterized by x.

- `ForAllType[x, cond, type]` represents a type satisfying cond.
- `ForAllType[{x1, x2, ...}, cond, type]` represents a type with multiple parameters.

## Examples

Define a parameterized type:

```wolfram
ForAllType[x, IntegerType[x]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ForAllType.html) for more details.*