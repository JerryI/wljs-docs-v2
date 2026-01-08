---
title: LocalSubmit
---

`LocalSubmit[expr]` submits a task to evaluate expr in a separate kernel.

- `LocalSubmit[ScheduledTask[expr, spec]]` submits a task on the schedule defined by spec.

## Examples

```wolfram
LocalSubmit[Print["Background computation"]]
```

```wolfram
task = LocalSubmit[LongComputation[]]
TaskWait[task]
```

```wolfram
LocalSubmit[ScheduledTask[UpdateData[], Quantity[1, "Hours"]]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LocalSubmit.html) for more details.