---
title: NumericArrayQ
---

`NumericArrayQ[expr]` gives True if expr is a valid NumericArray object, and False otherwise.

- `NumericArrayQ[expr, tpatt]` requires additionally that `NumericArrayType[expr]` match the pattern tpatt.
- `NumericArrayQ[expr, tpatt, dpatt]` requires additionally that `ArrayDepth[expr]` match the pattern dpatt.

## Examples

Check if an expression is a NumericArray:
```wolfram
arr = NumericArray[{1, 2, 3}, "Integer32"];
NumericArrayQ[arr]
```

Verify type and depth:
```wolfram
NumericArrayQ[arr, "Integer32", 1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NumericArrayQ.html) for more details.*