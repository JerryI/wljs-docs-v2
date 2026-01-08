---
title: TaskSuspend
---

`TaskSuspend[task]` suspends the execution of the specified task.

## Examples

```wolfram
task = SessionSubmit[ScheduledTask[Print["hello"], 1]];
TaskSuspend[task]
(* suspends the scheduled task *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TaskSuspend.html) for more details.