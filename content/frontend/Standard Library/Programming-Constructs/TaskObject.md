---
title: TaskObject
---

`TaskObject[spec]` is an object that represents a background task.

## Examples

Create a scheduled task:

```wolfram
task = SessionSubmit[ScheduledTask[Print["Hello"], 1]]
```

Check task status:

```wolfram
TaskObject[task]["TaskStatus"]
```

Stop a task:

```wolfram
TaskRemove[task]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TaskObject.html) for more details.*