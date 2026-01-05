# StateOutputEstimator

`StateOutputEstimator[ssm, l]` constructs an estimator for the `StateSpaceModel` ssm, with estimator gain matrix l.

`StateOutputEstimator[{ssm, sensors}, l]` uses only sensors as the measurements of ssm.

`StateOutputEstimator[{ssm, sensors, dinputs}, l]` specifies dinputs as the deterministic inputs of ssm.

## Examples

Construct a state estimator:

```wolfram
ssm = StateSpaceModel[{{-1, 0}, {0, -2}}, {{1}, {1}}, {{1, 0}}, {{0}}];
l = {{0.5}, {0.5}};
StateOutputEstimator[ssm, l]
(* StateSpaceModel[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StateOutputEstimator.html) for more details.*