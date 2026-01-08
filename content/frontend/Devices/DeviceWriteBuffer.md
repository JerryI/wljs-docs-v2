---
title: DeviceWriteBuffer
---

`DeviceWriteBuffer[device, vals]` fills the buffer on a device with the values vals.

`DeviceWriteBuffer[device, param -> vals]` fills the buffer associated with the parameter param with the values vals.

`DeviceWriteBuffer[device, {param1 -> vals1, param2 -> vals2, ...}]` fills the buffers associated with the parami with the corresponding values valsi.

## Examples

Write to device buffer:

```wolfram
DeviceWriteBuffer[device, Range[100]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeviceWriteBuffer.html) for more details.