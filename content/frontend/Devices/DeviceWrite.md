---
title: DeviceWrite
---

`DeviceWrite[device, val]` writes the value val to the specified device.

`DeviceWrite[device, {val1, val2, ...}]` writes the sequence of values vali to the specified device.

`DeviceWrite[device, param -> val]` writes val as the value of the parameter param.

`DeviceWrite[device, {param1 -> val1, param2 -> val2, ...}]` writes values of several parameters.

## Examples

Write to a device:

```wolfram
DeviceWrite[device, {1, 0, 1, 0}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeviceWrite.html) for more details.