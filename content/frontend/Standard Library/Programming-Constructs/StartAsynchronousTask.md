---
title: StartAsynchronousTask
---

`StartAsynchronousTask[task]` allows asynchronous evaluations from task after it has been stopped.

## Examples

```wolfram
task = CreateAsynchronousTask[1 + 1, "DelayTime" -> 2];
StartAsynchronousTask[task]
```

```wolfram
StopAsynchronousTask[task];
StartAsynchronousTask[task]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StartAsynchronousTask.html) for more details.*