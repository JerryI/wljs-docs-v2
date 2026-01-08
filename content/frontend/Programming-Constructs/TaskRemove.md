---
title: TaskRemove
---

`TaskRemove[task]` terminates and removes the specified task.

## Examples

Remove a scheduled task:
```wolfram
task = SessionSubmit[ScheduledTask[Print["tick"], 1]];
TaskRemove[task]
```

Remove all tasks:
```wolfram
TaskRemove /@ Tasks[]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TaskRemove.html) for more details.