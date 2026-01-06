# TrainingProgressReporting

`TrainingProgressReporting` is an option for `NetTrain` and related functions that specifies how to report the progress of training.

## Examples

Train with progress panel displayed:

```wolfram
NetTrain[net, data, TrainingProgressReporting -> "Panel"]
```

Print training progress to messages:

```wolfram
NetTrain[net, data, TrainingProgressReporting -> "Print"]
```

Disable progress reporting:

```wolfram
NetTrain[net, data, TrainingProgressReporting -> None]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TrainingProgressReporting.html) for more details.*