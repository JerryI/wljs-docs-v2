---
title: RestartInterval
---

`RestartInterval` is an option controlling the restart behavior of functions such as `ContinuousTask`.

This option specifies the time interval before a task is restarted after failure.

## Examples

```wolfram
ContinuousTask[expr, RestartInterval -> 60]
```

```wolfram
ScheduledTask[task, interval, RestartInterval -> Quantity[5, "Minutes"]]
```

```wolfram
StartScheduledTask[task, RestartInterval -> None]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RestartInterval.html) for more details.*