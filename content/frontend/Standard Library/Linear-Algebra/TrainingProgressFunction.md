---
title: TrainingProgressFunction
---

`TrainingProgressFunction` is an option for `NetTrain` that specifies a function to run periodically during training.

This option allows monitoring and custom actions during neural network training.

## Examples

```wolfram
NetTrain[net, data, TrainingProgressFunction -> (Print["Round: ", #Round] &)]
```

```wolfram
NetTrain[net, data, TrainingProgressFunction -> {(Sow[#Loss] &), "Round"}]
```

```wolfram
NetTrain[net, data, TrainingProgressFunction -> "Panel"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TrainingProgressFunction.html) for more details.*