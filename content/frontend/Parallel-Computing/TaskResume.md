---
title: TaskResume
---

`TaskResume[task]` resumes execution of the specified task.

This function continues a task that was previously suspended with `TaskSuspend`.

## Examples

```wolfram
task = SessionSubmit[ScheduledTask[Print["tick"], 1]];
TaskSuspend[task];
TaskResume[task]
```

```wolfram
(* Resume a suspended scheduled task *)
TaskResume[$ScheduledTask]
```

```wolfram
TaskResume[TaskObject[...]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TaskResume.html) for more details.