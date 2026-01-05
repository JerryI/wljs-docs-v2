# RecalibrationFunction

`RecalibrationFunction` is an option for `Classify`, `Predict` and related functions that specifies how to post-process model predictions.

## Examples

Apply isotonic regression recalibration:

```wolfram
Classify[trainingData, RecalibrationFunction -> "IsotonicRegression"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RecalibrationFunction.html) for more details.*