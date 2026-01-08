---
title: LaunchKernels
---

`LaunchKernels[]` launches all currently configured parallel subkernels.

- `LaunchKernels[n]` launches n local subkernels on the current computer.
- `LaunchKernels[ker]` launches the kernel specified by ker.
- `LaunchKernels[{ker1, ker2, ...}]` launches the kernels keri.

## Examples

Launch all configured kernels:

```wolfram
LaunchKernels[]
```

Launch 4 local kernels:

```wolfram
LaunchKernels[4]
```

Check running kernels:

```wolfram
LaunchKernels[];
Kernels[]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LaunchKernels.html) for more details.