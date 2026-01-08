---
title: NetInitialize
---

`NetInitialize[net]` gives a net in which all uninitialized learnable parameters have been given initial values.

- `NetInitialize[net, All]` reinitializes all learnable parameters.

## Examples

```wolfram
NetInitialize[NetChain[{LinearLayer[10], Ramp, LinearLayer[5]}]]
```

```wolfram
NetInitialize[untrainedNet, All]
```

```wolfram
net = NetInitialize[NetChain[{5, Tanh, 3}], Method -> "Xavier"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetInitialize.html) for more details.