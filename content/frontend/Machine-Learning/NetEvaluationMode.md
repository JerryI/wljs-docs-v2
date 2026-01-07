---
title: NetEvaluationMode
---

`NetEvaluationMode` is an option that can be given when applying neural net functions to input data, specifying whether the net should use training-specific behavior.

## Examples

Apply in test mode:
```wolfram
net[input, NetEvaluationMode -> "Test"]
```

Apply in training mode:
```wolfram
net[input, NetEvaluationMode -> "Train"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetEvaluationMode.html) for more details.*