# ModelPredictiveController

`ModelPredictiveController[sspec, cost, cons]` computes the model predictive controller for the system specification sspec that minimizes the cost function cost and satisfies the constraints cons.

- `ModelPredictiveController[..., "prop"]` returns the value of the property "prop".

## Examples

Create a simple MPC controller:

```wolfram
sys = StateSpaceModel[{{0, 1}, {-2, -3}}, {{0}, {1}}, IdentityMatrix[2], {{0}, {0}}];
ModelPredictiveController[sys, {"Weights" -> {1, 1}}, {}]
```

With input constraints:

```wolfram
ModelPredictiveController[sys, {"Weights" -> {1, 1}}, 
  {"InputConstraints" -> {-1, 1}}]
```

Get the controller gains:

```wolfram
ModelPredictiveController[sys, {"Weights" -> {1, 1}}, {}, "Gains"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ModelPredictiveController.html) for more details.*