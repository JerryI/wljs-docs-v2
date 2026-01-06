---
title: DeviceRead
---

`DeviceRead[devobj]` reads a single default item from the open device corresponding to the specified DeviceObject.

`DeviceRead["devclass"]` reads from the default device in the class "devclass".

`DeviceRead[device,param]` reads the parameter param from the specified device.

`DeviceRead[device,{param1,param2,…}]` reads the list of parameters parami from the specified device.

## Examples

Read from a device class:

```wolfram
DeviceRead["Serial"]
```

Read a specific parameter from a device:

```wolfram
DeviceRead[device, "Temperature"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeviceRead.html) for more details.*