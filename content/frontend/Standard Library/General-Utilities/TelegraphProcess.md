---
title: TelegraphProcess
---

`TelegraphProcess[μ]` represents a telegraph process with rate μ.

A telegraph process switches between two states at random times determined by a Poisson process.

## Examples

```wolfram
TelegraphProcess[1]
```

```wolfram
RandomFunction[TelegraphProcess[2], {0, 10}]
```

```wolfram
Mean[TelegraphProcess[0.5]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TelegraphProcess.html) for more details.*