# RunScheduledTask

```
RunScheduledTask[expr] schedules and starts a local scheduled task that will repeatedly evaluate expr once per second.

RunScheduledTask[expr,time] schedules and starts a task that will repeatedly evaluate expr every time seconds.

RunScheduledTask[expr,{time}] schedules and starts a task that will evaluate expr once after time seconds.

RunScheduledTask[expr,{time,count}] schedules and starts a task that will try evaluating expr once every time seconds up to count times.

RunScheduledTask[expr,timespec,start] schedules a task that will automatically start at start time.

RunScheduledTask[CloudObject[…]] asynchronously executes an existing cloud task or document generator.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*