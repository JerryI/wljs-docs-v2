---
title: ParallelNeeds
---

`ParallelNeeds["context`"]` evaluates `Needs["context`"]` on all available parallel kernels.

## Examples

```wolfram
ParallelNeeds["ComputationalGeometry`"]
```

```wolfram
LaunchKernels[];
ParallelNeeds["Developer`"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParallelNeeds.html) for more details.