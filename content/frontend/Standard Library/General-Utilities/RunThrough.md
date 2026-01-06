---
title: RunThrough
---

`RunThrough["command", expr]` executes an external command, giving the printed form of expr as input and taking the output, reading it as Wolfram Language input, and returning the result.

## Examples

```wolfram
RunThrough["cat", {1, 2, 3}]
```

```wolfram
RunThrough["sort", "c\nb\na"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RunThrough.html) for more details.*