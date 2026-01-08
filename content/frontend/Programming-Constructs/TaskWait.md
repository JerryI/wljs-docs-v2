---
title: TaskWait
---

`TaskWait[task]` waits for the specified task to be completely finished.

## Examples

```wolfram
task = SessionSubmit[Pause[2]; "Done"];
TaskWait[task]
task["Result"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TaskWait.html) for more details.