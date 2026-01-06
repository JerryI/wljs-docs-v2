---
title: UtilityFunction
---

`UtilityFunction` is an option for `Predict`, `Classify`, and related functions that specifies the utility value to assign to each possible pairing of actual and predicted values.

## Examples

```wolfram
Classify[data, testInput, 
  UtilityFunction -> {{1, 0}, {0, 1}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UtilityFunction.html) for more details.*