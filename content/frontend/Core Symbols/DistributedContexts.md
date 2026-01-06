# DistributedContexts

`DistributedContexts` is an option for various parallel computing functions that specifies which definitions for symbols appearing in an expression should be distributed to all parallel kernels.

## Examples

Distribute specific contexts:

```wolfram
ParallelEvaluate[f[x], DistributedContexts -> {"MyContext`"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DistributedContexts.html) for more details.*