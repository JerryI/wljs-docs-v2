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

## Camera
This is special case, that allows to stream an image from web-camera akin to `CurrentImage[]`. For example:

```wolfram
dev = DeviceOpen["Camera"];
dev["FrameRate"] = 60;
```

Then stream it to an image:

```wolfram
Refresh[DeviceRead[dev]//Colorize, 1/30.0]
```

Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

