# RemoteBatchJobObject

`RemoteBatchJobObject[…]` represents a remote batch job submitted by `RemoteBatchSubmit` or `RemoteBatchMapSubmit`.

## Examples

Submit a remote batch job:

```wolfram
job = RemoteBatchSubmit["provider", 1 + 1]
(* RemoteBatchJobObject[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemoteBatchJobObject.html) for more details.*