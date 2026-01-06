# LearningRateMultipliers

`LearningRateMultipliers` is an option for net layers and for `NetTrain`, `NetChain`, `NetGraph` that specifies learning rate multipliers to apply during training.

## Examples

```wolfram
NetTrain[net, data, LearningRateMultipliers -> {"layer1" -> 0.1}]
```

```wolfram
LinearLayer[10, LearningRateMultipliers -> {"Weights" -> 2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LearningRateMultipliers.html) for more details.*