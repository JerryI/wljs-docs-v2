---
title: TunnelData
---

`TunnelData[entity, property]` gives the value of the specified property for the tunnel entity.

- `TunnelData[{entity1, entity2, ...}, property]` gives a list of property values for the specified tunnel entities.
- `TunnelData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

Get tunnel length:

```wolfram
TunnelData[Entity["Tunnel", "ChannelTunnel"], "Length"]
```

Get multiple properties:

```wolfram
TunnelData[Entity["Tunnel", "GotthardBaseTunnel"], {"Length", "OpeningYear"}]
```

List all tunnels:

```wolfram
TunnelData[EntityClass["Tunnel", All], "Name"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TunnelData.html) for more details.*