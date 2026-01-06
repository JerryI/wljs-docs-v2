# RemoteBatchJobAbort

`RemoteBatchJobAbort[job]` aborts a remote batch job.

## Examples

Abort a running job:

```wolfram
job = RemoteBatchSubmit[...];
RemoteBatchJobAbort[job]
```

Check job status after abort:

```wolfram
RemoteBatchJobInformation[job, "Status"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemoteBatchJobAbort.html) for more details.*