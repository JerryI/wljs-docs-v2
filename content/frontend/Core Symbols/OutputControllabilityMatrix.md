# OutputControllabilityMatrix

`OutputControllabilityMatrix[ssm]` gives the output controllability matrix of the state-space model ssm.

## Examples

```wolfram
OutputControllabilityMatrix[StateSpaceModel[{{0, 1}, {-1, -1}}, {{1}, {0}}, {{1, 0}}, {{0}}]]
```

```wolfram
sys = StateSpaceModel[TransferFunctionModel[1/(s^2 + s + 1), s]];
OutputControllabilityMatrix[sys]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OutputControllabilityMatrix.html) for more details.*