---
title: DeviceReadTimeSeries
---

`DeviceReadTimeSeries[device,{t,dt}]` repeatedly reads default items from the specified device at interval dt for a total time t, returning a time series of the resulting values.

`DeviceReadTimeSeries[device,{t,dt},param]` repeatedly reads the parameter param and returns a time series of its values.

`DeviceReadTimeSeries[device,{t,dt},{param1,param2,…}]` repeatedly reads the parami and returns a time series of their values.

## Examples

Read from a device for 10 seconds at 1 second intervals:

```wolfram
DeviceReadTimeSeries["Serial", {10, 1}]
```

Read specific parameters:

```wolfram
DeviceReadTimeSeries[device, {5, 0.5}, "Temperature"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeviceReadTimeSeries.html) for more details.