# ContinuousMarkovProcess

`ContinuousMarkovProcess[i0, q]` represents a continuous-time finite-state Markov process with transition rate matrix q and initial state i0.

`ContinuousMarkovProcess[p0, q]` represents a Markov process with initial state probability vector p0.

`ContinuousMarkovProcess[..., m, μ]` represents a Markov process with transition matrix m and transition rates μ.

`ContinuousMarkovProcess[..., g]` represents a Markov process with transition rate matrix from the graph g.

## Examples

Two-state continuous Markov process:

```wolfram
proc = ContinuousMarkovProcess[1, {{-1, 1}, {2, -2}}];
RandomFunction[proc, {0, 10}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContinuousMarkovProcess.html) for more details.*