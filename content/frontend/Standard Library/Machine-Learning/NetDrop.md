---
title: NetDrop
---

`NetDrop[chain, n]` removes the first n layers from a `NetChain`.

- `NetDrop[chain, -n]` removes the last n layers from a `NetChain`.
- `NetDrop[chain, {start, end}]` drops the layers between start and end in a `NetChain`.

## Examples

```wolfram
net = NetChain[{LinearLayer[], Ramp, LinearLayer[], Ramp}];
NetDrop[net, 2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetDrop.html) for more details.*