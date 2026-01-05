# NextScheduledTaskTime

`NextScheduledTaskTime[obj]` gives the next execution time of the scheduled task represented by obj.

## Examples

```wolfram
task = SessionSubmit[ScheduledTask[Print["Hello"], 60]];
NextScheduledTaskTime[task]
(* DateObject[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NextScheduledTaskTime.html) for more details.*