---
title: EvaluationObject
---

`EvaluationObject[expr, ...]` represents an expression submitted for evaluation on any available parallel kernel.

## Examples

Submit parallel evaluation:

```wolfram
ParallelSubmit[EvaluationObject[Pause[5]; 42]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EvaluationObject.html) for more details.*