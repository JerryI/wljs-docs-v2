---
title: BinomialPointProcess
---

`BinomialPointProcess[n, reg]` represents a binomial point process with n points in the region reg.

## Examples

Create a binomial point process:

```wolfram
BinomialPointProcess[10, Rectangle[]]
```

Sample from the process:

```wolfram
RandomPointConfiguration[BinomialPointProcess[20, Disk[]]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BinomialPointProcess.html) for more details.