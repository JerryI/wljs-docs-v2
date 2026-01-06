# ScheduledTask

`ScheduledTask[expr, timespec]` represents a scheduled task to be evaluated on the schedule defined by timespec.

Scheduled tasks allow automatic execution of expressions at specified times or intervals.

## Examples

```wolfram
task = ScheduledTask[Print["Hello"], 5]
```

```wolfram
(* Run every hour *)
ScheduledTask[SendMail["report"], {Hourly}]
```

```wolfram
(* Run at specific time *)
ScheduledTask[Beep[], DateObject[{2024, 12, 1, 9, 0, 0}]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ScheduledTask.html) for more details.*