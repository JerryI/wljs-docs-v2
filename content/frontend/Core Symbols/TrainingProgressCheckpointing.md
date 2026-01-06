# TrainingProgressCheckpointing

`TrainingProgressCheckpointing` is an option for `NetTrain` that specifies how to save copies of the net during training.

## Examples

```wolfram
(* Save checkpoints every 5 rounds *)
NetTrain[net, data, 
  TrainingProgressCheckpointing -> {"Directory", "checkpoints", "Interval" -> Quantity[5, "Rounds"]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TrainingProgressCheckpointing.html) for more details.*