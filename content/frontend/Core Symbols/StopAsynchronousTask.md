# StopAsynchronousTask

`StopAsynchronousTask[task]` stops asynchronous evaluations from task.

## Examples

```wolfram
task = RunScheduledTask[Print[DateString[]], 2];
StopAsynchronousTask[task]
```

```wolfram
StopAsynchronousTask[AsynchronousTaskObject[...]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StopAsynchronousTask.html) for more details.*