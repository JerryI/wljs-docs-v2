---
title: RemoteInputFiles
---

`RemoteInputFiles` is an option for `RemoteBatchSubmit` and `RemoteBatchMapSubmit` that specifies local files to be uploaded and made available within remote jobs.

## Examples

Upload files to remote job:
```wolfram
RemoteBatchSubmit[code, RemoteInputFiles -> {"data.csv", "config.json"}]
```

Include a directory:
```wolfram
RemoteBatchSubmit[job, RemoteInputFiles -> {File["localDir"]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemoteInputFiles.html) for more details.*