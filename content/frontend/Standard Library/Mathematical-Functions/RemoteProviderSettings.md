# RemoteProviderSettings

`RemoteProviderSettings` is an option for `RemoteBatchSubmit` and `RemoteBatchMapSubmit` that specifies provider-specific settings for a batch job.

## Examples

```wolfram
RemoteBatchSubmit[fun, RemoteProviderSettings -> {"MaxMemory" -> Quantity[4, "Gigabytes"]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemoteProviderSettings.html) for more details.*