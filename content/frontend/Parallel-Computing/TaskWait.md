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


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TaskWait.html) for more details.