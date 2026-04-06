---
title: DeviceReadBuffer
---

`DeviceReadBuffer[device]` reads the complete contents of the buffer on a device.

`DeviceReadBuffer[device, n]` reads n elements from the buffer.

`DeviceReadBuffer[device, crit]` reads elements from the buffer until the device-specific criterion crit is met.

`DeviceReadBuffer[device, crit, param]` reads elements associated with the parameter param.

## Examples

Read from device buffer:

```wolfram
DeviceReadBuffer[device, 100]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeviceReadBuffer.html) for more details.