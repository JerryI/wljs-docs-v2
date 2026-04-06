---
title: PoissonProcess
---

`PoissonProcess[μ]` represents a Poisson process with rate μ.

## Examples

Create a Poisson process with rate 2:

```wolfram
PoissonProcess[2]
(* PoissonProcess[2] *)
```

Simulate random values:

```wolfram
RandomFunction[PoissonProcess[2], {0, 10}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PoissonProcess.html) for more details.