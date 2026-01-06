---
title: DiffInputFunction
---

`DiffInputFunction` is an option for `Diff` and related functions that specifies how the input expressions should be preprocessed.

## Examples

Preprocess input before diffing:

```wolfram
Diff[expr1, expr2, DiffInputFunction -> ToLowerCase]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DiffInputFunction.html) for more details.*