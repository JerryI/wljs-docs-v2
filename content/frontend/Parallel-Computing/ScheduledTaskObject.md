---
title: ScheduledTaskObject
---

`ScheduledTaskObject[id, expr, spec, ...]` is a task object specifying future evaluation of expr according to spec.

## Examples

```wolfram
task = SessionSubmit[ScheduledTask[Print["Hello"], {5}]]
```

```wolfram
TaskRemove[ScheduledTaskObject[1]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ScheduledTaskObject.html) for more details.