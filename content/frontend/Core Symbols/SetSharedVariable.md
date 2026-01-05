# SetSharedVariable

`SetSharedVariable[s1, s2, ...]` declares the symbols si as shared variables whose values are synchronized among all parallel kernels.

## Examples

```wolfram
SetSharedVariable[count];
count = 0;
ParallelDo[count++, {i, 100}];
count
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SetSharedVariable.html) for more details.*