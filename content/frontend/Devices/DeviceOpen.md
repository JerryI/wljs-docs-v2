---
title: DeviceOpen
---

`DeviceOpen["devclass"]` opens a connection to the first available device in the class specified by "devclass".

`DeviceOpen["devclass",spec]` opens a connection to the particular device defined by spec.

`DeviceOpen[device]` opens a connection to an existing device specified by a DeviceObject.

## Examples

Open a serial port connection:

```wolfram
dev = DeviceOpen["Serial", "/dev/ttyUSB0"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeviceOpen.html) for more details.