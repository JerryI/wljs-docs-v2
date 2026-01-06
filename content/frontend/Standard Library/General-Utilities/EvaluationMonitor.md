# EvaluationMonitor

`EvaluationMonitor` is an option for various numerical computation and plotting functions that gives an expression to evaluate whenever functions derived from the input are evaluated numerically.

## Examples

```wolfram
NMinimize[x^2 + y^2, {x, y}, EvaluationMonitor :> Print[{x, y}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EvaluationMonitor.html) for more details.*