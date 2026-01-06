# TrainingStoppingCriterion

`TrainingStoppingCriterion` is an option for `NetTrain` that specifies a criterion for stopping training early in order to prevent overfitting.

## Examples

```wolfram
NetTrain[net, data, TrainingStoppingCriterion -> <|"Criterion" -> "Loss", "Patience" -> 5|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TrainingStoppingCriterion.html) for more details.*