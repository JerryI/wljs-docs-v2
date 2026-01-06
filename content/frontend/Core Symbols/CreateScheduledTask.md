# CreateScheduledTask

`CreateScheduledTask[expr]` creates a local scheduled task that will repeatedly evaluate expr once per second.

`CreateScheduledTask[expr, time]` creates a task that will repeatedly evaluate expr every time seconds.

`CreateScheduledTask[expr, {time}]` creates a task that will evaluate expr once after time seconds.

`CreateScheduledTask[expr, {time, count}]` creates a task that will try evaluating expr once every time seconds up to count times total.

## Examples

Run a task every 5 seconds:

```wolfram
task = CreateScheduledTask[Print["tick"], 5]
```

Run once after 10 seconds:

```wolfram
CreateScheduledTask[Print["done"], {10}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CreateScheduledTask.html) for more details.*