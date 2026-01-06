---
title: RemoteBatchJobs
---

`RemoteBatchJobs[env]` gives a list of RemoteBatchJobObject expressions representing batch jobs submitted using env.

- `RemoteBatchJobs[env, type]` returns only jobs of given type.
- `RemoteBatchJobs[]` gives a list of jobs submitted using $DefaultRemoteBatchSubmissionEnvironment.

## Examples

List all batch jobs:
```wolfram
RemoteBatchJobs[]
```

Get jobs from a specific environment:
```wolfram
RemoteBatchJobs[myBatchEnv]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemoteBatchJobs.html) for more details.*