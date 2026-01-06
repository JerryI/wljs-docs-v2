# SetSharedFunction

`SetSharedFunction[f1, f2, ...]` declares the symbols fi as shared functions that are synchronized among all parallel kernels.

## Examples

```wolfram
SetSharedFunction[myFunc]
```

```wolfram
myFunc[x_] := x^2
ParallelTable[myFunc[i], {i, 1, 5}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SetSharedFunction.html) for more details.*