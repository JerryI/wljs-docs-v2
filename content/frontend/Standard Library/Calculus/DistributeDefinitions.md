# DistributeDefinitions

`DistributeDefinitions[s1, s2, ...]` distributes all definitions for the symbols si to all parallel kernels.

`DistributeDefinitions["context`"]` distributes definitions for all symbols in the specified context.

## Examples

Distribute a function definition:

```wolfram
f[x_] := x^2;
DistributeDefinitions[f];
ParallelTable[f[i], {i, 10}]
(* {1, 4, 9, 16, 25, 36, 49, 64, 81, 100} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DistributeDefinitions.html) for more details.*