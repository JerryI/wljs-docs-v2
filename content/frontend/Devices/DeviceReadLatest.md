---
title: DeviceReadLatest
---

`DeviceReadLatest[device]` returns the most recently collected default item from a device.

`DeviceReadLatest[device, n]` returns a list of the n most recently collected items.

`DeviceReadLatest[device, n, param]` returns the n most recently collected values of param.

`DeviceReadLatest[device, n, {param1, param2, ...}]` returns a list of the most recently collected values of the parami.

## Examples

Get the latest reading:

```wolfram
DeviceReadLatest[sensor]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeviceReadLatest.html) for more details.*