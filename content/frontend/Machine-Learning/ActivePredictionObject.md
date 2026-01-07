---
title: ActivePredictionObject
---

`ActivePredictionObject[...]` represents the result of an `ActivePrediction` process.

## Examples

Create an active prediction object and query its properties:

```wolfram
obj = ActivePrediction[Sin[#] &, {0, Pi, 2 Pi}];
obj["TrainingExamples"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ActivePredictionObject.html) for more details.*