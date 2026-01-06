# ForwardCloudCredentials

`ForwardCloudCredentials` is an option for remote evaluation and submission functions that specifies whether Wolfram Cloud credentials from the local session should be copied into remote sessions.

## Examples

Submit a task with cloud credentials forwarding:

```wolfram
CloudSubmit[expr, ForwardCloudCredentials -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ForwardCloudCredentials.html) for more details.*