---
title: WaitAll
---

`WaitAll[expr]` waits for all concurrent evaluations represented by EvaluationObject expressions in expr to finish, then returns the resulting expression obtained.

## Examples

Wait for parallel tasks:

```wolfram
tasks = Table[ParallelSubmit[Prime[n^2]], {n, 5}];
WaitAll[tasks]
```

With SessionSubmit:

```wolfram
jobs = Table[SessionSubmit[Pause[1]; i], {i, 3}];
WaitAll[jobs]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WaitAll.html) for more details.