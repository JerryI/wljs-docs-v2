---
title: TaskExecute
---

`TaskExecute[task]` immediately executes an instance of the specified task, independently of any schedule given.

## Examples

```wolfram
task = SessionSubmit[Print["Hello"]];
TaskExecute[task]
```

```wolfram
TaskExecute[ScheduledTask[Print["Now"], 5]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TaskExecute.html) for more details.