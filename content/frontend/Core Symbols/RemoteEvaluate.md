# RemoteEvaluate

`RemoteEvaluate[expr]` gives the result of evaluating *expr* using your current default remote Wolfram Language kernel.

- `RemoteEvaluate[ker, expr]` gives the result of evaluating *expr* using the kernel specified by *ker*.
- `RemoteEvaluate[{ker1, ker2, ...}, expr]` gives a list of the results of evaluating *expr* using each of the kernels *keri*.
- `RemoteEvaluate[ker, expr, h]` wraps the head *h* around the result produced before returning it.

## Examples

```wolfram
RemoteEvaluate["myremotekernel", 1 + 1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemoteEvaluate.html) for more details.*