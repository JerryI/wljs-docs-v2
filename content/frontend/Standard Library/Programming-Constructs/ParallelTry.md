# ParallelTry

`ParallelTry[f, {arg1, arg2, ...}]` evaluates f[argi] in parallel, returning the first result received.

- `ParallelTry[f, {arg1, arg2, ...}, k]` returns a list of the first k results.

## Examples

Find first completed computation:

```wolfram
ParallelTry[PrimeQ, Range[10^6, 10^6 + 100]]
```

Get first 3 results:

```wolfram
ParallelTry[(Pause[RandomReal[]]; #^2) &, Range[10], 3]
```

Race multiple computations:

```wolfram
ParallelTry[FactorInteger, {10^50 + 1, 10^40 + 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParallelTry.html) for more details.*