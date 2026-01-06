---
title: RemoteKernelObject
---

`RemoteKernelObject[spec]` specifies a remote kernel that can be used for `RemoteEvaluate` or `LaunchKernels`.

## Examples

```wolfram
RemoteKernelObject["user@host"]
```

```wolfram
LaunchKernels[RemoteKernelObject["ssh://server"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemoteKernelObject.html) for more details.*