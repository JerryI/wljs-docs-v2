---
title: PingTime
---

`PingTime[host]` gives the round-trip ping time for the specified network host.

- `PingTime[host, n]` gives a list of times for n successive pings.

## Examples

Ping a server:

```wolfram
PingTime["google.com"]
```

Multiple pings to measure consistency:

```wolfram
PingTime["wolfram.com", 5]
```

Measure ping time in milliseconds:

```wolfram
UnitConvert[PingTime["localhost"], "Milliseconds"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PingTime.html) for more details.*