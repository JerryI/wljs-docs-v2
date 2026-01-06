---
title: NetAppend
---

`NetAppend[net, layer]` appends a layer or a net onto a `NetChain`, a layer or a `NetGraph` with one output port.

- `NetAppend[net, "name" -> layer]` appends a layer with a given name.
- `NetAppend[net, {layer1, layer2, ...}]` appends several layers or nets.

## Examples

```wolfram
NetAppend[LinearLayer[10], SoftmaxLayer[]]
```

```wolfram
NetAppend[NetChain[{LinearLayer[5]}], "output" -> ReshapeLayer[{5, 1}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetAppend.html) for more details.*