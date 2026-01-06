# MinimalStateSpaceModel

`MinimalStateSpaceModel[sys]` gives the minimal state-space model of the state-space model sys.

- `MinimalStateSpaceModel[sys, {z1, ...}]` specifies the new coordinates zi.

## Examples

Create minimal state-space model:

```wolfram
sys = StateSpaceModel[{{1, 0}, {0, 1}}, {{1}, {0}}, {{1, 1}}, {{0}}];
MinimalStateSpaceModel[sys]
```

From transfer function:

```wolfram
tf = TransferFunctionModel[1/(s^2 + s + 1), s];
MinimalStateSpaceModel[StateSpaceModel[tf]]
```

Reduce redundant states:

```wolfram
MinimalStateSpaceModel[
  StateSpaceModel[{{0, 1, 0}, {0, 0, 1}, {-1, -2, -1}}, {{0}, {0}, {1}}, {{1, 0, 0}}, {{0}}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MinimalStateSpaceModel.html) for more details.*