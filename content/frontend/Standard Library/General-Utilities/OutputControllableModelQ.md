# OutputControllableModelQ

`OutputControllableModelQ[ssm]` gives True if the state-space model ssm is output controllable, and False otherwise.

## Examples

Check if a system is output controllable:
```wolfram
sys = StateSpaceModel[{{0, 1}, {-2, -3}}, {{1}, {0}}, {{1, 0}}, {{0}}];
OutputControllableModelQ[sys]
```

Test a transfer function model:
```wolfram
OutputControllableModelQ[TransferFunctionModel[1/(s + 1), s]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OutputControllableModelQ.html) for more details.*