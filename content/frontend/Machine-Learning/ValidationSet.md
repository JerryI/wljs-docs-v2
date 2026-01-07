---
title: ValidationSet
---

`ValidationSet` is an option for `Predict`, `Classify`, `NetTrain`, and related functions that specifies the validation set to be used during the training phase.

## Examples

```wolfram
Classify[trainingData, ValidationSet -> testData]
```

```wolfram
NetTrain[net, trainData, ValidationSet -> Scaled[0.1]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ValidationSet.html) for more details.*