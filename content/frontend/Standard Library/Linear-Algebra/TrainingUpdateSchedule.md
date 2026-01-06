---
title: TrainingUpdateSchedule
---

`TrainingUpdateSchedule` is an option for `NetTrain` that specifies which arrays of the network can be updated at each step of the optimization process.

## Examples

Train only specific layers:

```wolfram
NetTrain[net, data, TrainingUpdateSchedule -> {"layer1", "layer2"}]
```

Freeze all layers except one:

```wolfram
NetTrain[net, data, TrainingUpdateSchedule -> {"output"}]
```

Update all arrays (default):

```wolfram
NetTrain[net, data, TrainingUpdateSchedule -> All]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TrainingUpdateSchedule.html) for more details.*