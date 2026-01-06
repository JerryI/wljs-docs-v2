# ServiceSubmit

`ServiceSubmit[ServiceRequest[assoc]]` submits a request to be executed by an external service specified by assoc.

- `ServiceSubmit[ScheduledTask[req, spec]]` submits a task to evaluate `ServiceRequest` req on an external service following the schedule defined by spec.
- `ServiceSubmit[ContinuousTask[req, spec]]` submits a task to evaluate `ServiceRequest` req on an external service; the result of the request is updated whenever available.

## Examples

```wolfram
ServiceSubmit[ServiceRequest["Twitter", {"PostTweet", "Status" -> "Hello!"}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ServiceSubmit.html) for more details.*