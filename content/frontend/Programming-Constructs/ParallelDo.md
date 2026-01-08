---
title: ParallelDo
---

`ParallelDo[expr, {imax}]` evaluates expr in parallel imax times.

`ParallelDo[expr, {i, imax}]` evaluates expr in parallel with the variable i successively taking on the values 1 through imax (in steps of 1).

`ParallelDo[expr, {i, imin, imax}]` starts with i = imin.

`ParallelDo[expr, {i, imin, imax, di}]` uses steps di.

`ParallelDo[expr, {i, {i1, i2, ...}}]` uses the successive values i1, i2, ....

`ParallelDo[expr, {i, imin, imax}, {j, jmin, jmax}, ...]` evaluates expr looping in parallel over different values of j, etc. for each i.

## Examples

Evaluate in parallel 10 times:

```wolfram
ParallelDo[Print[$KernelID], {10}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParallelDo.html) for more details.