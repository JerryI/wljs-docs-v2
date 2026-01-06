# ParallelEvaluate

`ParallelEvaluate[expr]` evaluates the expression expr on all available parallel kernels and returns the list of results obtained.

- `ParallelEvaluate[expr, kernel]` evaluates expr on the parallel kernel specified.
- `ParallelEvaluate[expr, {ker1, ker2, ...}]` evaluates expr on the parallel kernels keri.
- `ParallelEvaluate[expr, kernels, h]` wraps the head h around the results before returning them.

## Examples

```wolfram
ParallelEvaluate[$KernelID]
```

```wolfram
ParallelEvaluate[RandomReal[], Kernels[]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParallelEvaluate.html) for more details.*