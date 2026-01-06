---
title: ContinuousTask
---

`ContinuousTask[expr]` represents a task in which expr is continuously reevaluated.

`ContinuousTask[expr, end]` represents a task in which expr is continuously reevaluated until the time specified by end.

`ContinuousTask[expr, tspan]` represents a task in which expr is continuously reevaluated over the time span tspan.

## Examples

Create a continuous task:

```wolfram
SessionSubmit[ContinuousTask[Print[Now]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContinuousTask.html) for more details.*