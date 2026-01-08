---
title: RandomWalkProcess
---

`RandomWalkProcess[p]` represents a random walk on a line with the probability of a positive unit step *p* and the probability of a negative unit step 1-*p*.

- `RandomWalkProcess[p, q]` represents a random walk with the probability of a positive unit step *p*, the probability of a negative unit step *q*, and the probability of a zero step 1-*p*-*q*.

## Examples

```wolfram
RandomFunction[RandomWalkProcess[0.5], {0, 100}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RandomWalkProcess.html) for more details.*