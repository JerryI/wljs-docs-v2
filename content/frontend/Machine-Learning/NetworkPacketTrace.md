---
title: NetworkPacketTrace
---

`NetworkPacketTrace[expr]` evaluates expr and returns information on network packets transmitted or received through all network interfaces during the evaluation.

- `NetworkPacketTrace[expr, service]` records only packets associated with the specified network service.
- `NetworkPacketTrace[expr, port]` records only packets associated with the specified port.
- `NetworkPacketTrace[expr, {port1, port2, ...}]` records only packets associated with any of the ports.
- `NetworkPacketTrace[expr, spec]` records only packets matching the specification spec.

## Examples

Trace network packets during a URL fetch:

```wolfram
NetworkPacketTrace[URLRead["https://www.wolfram.com"]]
```

Trace only HTTP traffic:

```wolfram
NetworkPacketTrace[URLRead["https://www.wolfram.com"], "HTTP"]
```

Trace packets on a specific port:

```wolfram
NetworkPacketTrace[URLRead["https://www.wolfram.com"], 443]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetworkPacketTrace.html) for more details.