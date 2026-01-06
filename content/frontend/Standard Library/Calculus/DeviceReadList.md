---
title: DeviceReadList
---

`DeviceReadList[device, n]` reads from the specified device n times, returning a list of the results.

`DeviceReadList[device, n, param]` reads the parameter param.

`DeviceReadList[device, n, {param1, param2, ...}]` reads the list of parameters parami.

## Examples

Read multiple values from a device:

```wolfram
DeviceReadList[sensor, 10]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeviceReadList.html) for more details.*