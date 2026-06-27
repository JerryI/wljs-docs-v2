---
title: TaskAbort
---

`TaskAbort[task]` generates an interrupt to abort the current execution of a task.

This stops a running task and cancels any pending executions.

## Examples

```wolfram
task = SessionSubmit[ScheduledTask[Print["tick"], 1]];
TaskAbort[task]
```

```wolfram
(* Abort a long-running task *)
TaskAbort[$CurrentTask]
```

```wolfram
(* Check task status after abort *)
task = SessionSubmit[Pause[100]];
TaskAbort[task];
TaskStatus[task]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TaskAbort.html) for more details.