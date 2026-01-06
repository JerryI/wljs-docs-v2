# HiddenMarkovProcess

`HiddenMarkovProcess[i0, m, em]` represents a discrete-time, finite-state hidden Markov process with transition matrix m, emission matrix em, and initial hidden state i0.

`HiddenMarkovProcess[p0, m, ...]` uses initial hidden state probability vector p0.

## Examples

Simple HMM with 2 hidden states:

```wolfram
proc = HiddenMarkovProcess[{0.5, 0.5}, {{0.7, 0.3}, {0.4, 0.6}}, {{0.9, 0.1}, {0.2, 0.8}}];
RandomFunction[proc, {0, 10}]
```

Get the transition matrix:

```wolfram
MarkovProcessProperties[proc, "TransitionMatrix"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HiddenMarkovProcess.html) for more details.*