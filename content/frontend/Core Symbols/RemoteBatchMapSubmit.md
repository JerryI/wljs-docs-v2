# RemoteBatchMapSubmit

`RemoteBatchMapSubmit[env,f,list]` submits an array batch job in which f is applied to each element on the first level of list, using the remote batch submission environment env.

`RemoteBatchMapSubmit[f,list]` submits an array job using `$DefaultRemoteBatchSubmissionEnvironment`.

## Examples

```wolfram
RemoteBatchMapSubmit[f, {1, 2, 3}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemoteBatchMapSubmit.html) for more details.*