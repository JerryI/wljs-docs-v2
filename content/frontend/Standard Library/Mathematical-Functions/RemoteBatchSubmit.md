# RemoteBatchSubmit

`RemoteBatchSubmit[env, expr]` submits expr for evaluation using the remote batch submission environment env.

- `RemoteBatchSubmit[expr]` submits expr for evaluation using $DefaultRemoteBatchSubmissionEnvironment.

## Examples

Submit a computation:

```wolfram
env = RemoteBatchSubmissionEnvironment["AWS"];
job = RemoteBatchSubmit[env, Table[Prime[n], {n, 10000}]]
```

Check job status:

```wolfram
RemoteBatchJobInformation[job, "Status"]
```

Retrieve results:

```wolfram
RemoteBatchJobObject[job]["Result"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemoteBatchSubmit.html) for more details.*