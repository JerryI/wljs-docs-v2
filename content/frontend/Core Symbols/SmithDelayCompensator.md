# SmithDelayCompensator

`SmithDelayCompensator[sys, con]` gives the Smith compensator for the time-delay system sys and the delay-free controller con.

## Examples

Create Smith compensator:

```wolfram
sys = TransferFunctionModel[Exp[-s]/(s + 1), s];
con = TransferFunctionModel[2, s];
SmithDelayCompensator[sys, con]
```

For a process with delay:

```wolfram
SmithDelayCompensator[
  TransferFunctionModel[Exp[-2 s]/(s^2 + s + 1), s],
  TransferFunctionModel[s + 1, s]
]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SmithDelayCompensator.html) for more details.*