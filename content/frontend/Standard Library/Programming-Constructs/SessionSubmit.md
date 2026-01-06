# SessionSubmit

`SessionSubmit[expr]` submits an asynchronous task to evaluate expr in the current session.

- `SessionSubmit[ScheduledTask[expr, spec]]` submits a task to evaluate expr in the current session on the schedule defined by spec.

## Examples

```wolfram
SessionSubmit[Print["Hello from background task"]]
```

```wolfram
SessionSubmit[ScheduledTask[Print[Now], {3}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SessionSubmit.html) for more details.*