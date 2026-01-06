---
title: TrainingProgressMeasurements
---

`TrainingProgressMeasurements` is an option for `NetTrain` that specifies measurements to make while training is in progress.

## Examples

```wolfram
NetTrain[net, data, TrainingProgressMeasurements -> {"Loss", "Accuracy"}]
```

```wolfram
NetTrain[net, trainData, ValidationSet -> testData, TrainingProgressMeasurements -> All]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TrainingProgressMeasurements.html) for more details.*