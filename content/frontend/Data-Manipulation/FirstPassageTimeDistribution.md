---
title: FirstPassageTimeDistribution
---

`FirstPassageTimeDistribution[mproc,f]` represents the distribution of times for the Markov process mproc to pass from the initial state to final states f for the first time.

## Examples

Create a first passage time distribution:

```wolfram
proc = DiscreteMarkovProcess[1, {{0.5, 0.5}, {0.3, 0.7}}];
dist = FirstPassageTimeDistribution[proc, {2}]
```

Compute mean first passage time:

```wolfram
Mean[dist]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FirstPassageTimeDistribution.html) for more details.