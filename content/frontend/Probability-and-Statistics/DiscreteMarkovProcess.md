---
title: DiscreteMarkovProcess
---

`DiscreteMarkovProcess[i0, m]` represents a discrete-time, finite-state Markov process with transition matrix m and initial state i0.

`DiscreteMarkovProcess[p0, m]` represents a Markov process with initial state probability vector p0.

`DiscreteMarkovProcess[..., g]` represents a Markov process with transition matrix from the graph g.

## Examples

Create a simple two-state Markov process:

```wolfram
DiscreteMarkovProcess[1, {{0.5, 0.5}, {0.3, 0.7}}]
(* DiscreteMarkovProcess[...] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DiscreteMarkovProcess.html) for more details.