---
title: RemoveAsynchronousTask
---

`RemoveAsynchronousTask[asyncTask]` stops asynchronous evaluations and removes asyncTask from the system.

## Examples

Create and remove an asynchronous task:
```wolfram
task = SessionSubmit[ScheduledTask[Print["tick"], 1]];
RemoveAsynchronousTask[task]
```

Stop all tasks:
```wolfram
RemoveAsynchronousTask /@ AsynchronousTasks[]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemoveAsynchronousTask.html) for more details.*