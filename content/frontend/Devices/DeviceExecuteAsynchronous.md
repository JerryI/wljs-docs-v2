---
title: DeviceExecuteAsynchronous
---

`DeviceExecuteAsynchronous[device, "command", fun]` initiates asynchronous execution of the specified command on a device, calling the handler function fun when an event occurs.

`DeviceExecuteAsynchronous[device, "command", params, fun]` executes the command with the parameters params.

## Examples

Execute asynchronously:

```wolfram
DeviceExecuteAsynchronous[device, "Measure", Print]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeviceExecuteAsynchronous.html) for more details.