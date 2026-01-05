# CreateScheduledTask

```
CreateScheduledTask[expr] creates a local scheduled task that will repeatedly evaluate expr once per second.

CreateScheduledTask[expr,time] creates a task that will repeatedly evaluate expr every time seconds.

CreateScheduledTask[expr,{time}] creates a task that will evaluate expr once after time seconds.

CreateScheduledTask[expr,{time,count}] creates a task that will try evaluating expr once every time seconds up to count times total.

CreateScheduledTask[expr,timespec,start] creates a task that will evaluate expr according to timespec starting at start time.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*