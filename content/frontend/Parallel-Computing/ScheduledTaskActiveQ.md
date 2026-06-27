---
title: ScheduledTaskActiveQ
---

`ScheduledTaskActiveQ[obj]` yields True if obj represents an active task, and False otherwise.

## Examples

Check if a scheduled task is active:

```wolfram
task = CreateScheduledTask[Print["Hello"], 5];
ScheduledTaskActiveQ[task]
(* True *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ScheduledTaskActiveQ.html) for more details.