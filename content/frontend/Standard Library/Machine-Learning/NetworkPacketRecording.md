---
title: NetworkPacketRecording
---

`NetworkPacketRecording[t]` records information on network packets transmitted or received through all network interfaces on your computer for t seconds.

`NetworkPacketRecording[t,service]` records only packets associated with the specified network service.

`NetworkPacketRecording[t,port]` records only packets associated with the specified port.

`NetworkPacketRecording[t,{port1,port2,…}]` records only packets associated with any of the ports porti.

`NetworkPacketRecording[t,spec]` records only packets matching the specification spec.

## Examples

Record packets for 5 seconds:

```wolfram
NetworkPacketRecording[5]
```

Record only HTTP traffic:

```wolfram
NetworkPacketRecording[5, "HTTP"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetworkPacketRecording.html) for more details.*