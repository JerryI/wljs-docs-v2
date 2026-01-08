---
title: BinomialProcess
---

`BinomialProcess[p]` represents a binomial process with event probability p.

## Examples

Simulate a binomial process:

```wolfram
RandomFunction[BinomialProcess[0.3], {0, 20}]
```

Plot sample paths:

```wolfram
ListLinePlot[RandomFunction[BinomialProcess[0.5], {0, 50}, 5]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BinomialProcess.html) for more details.