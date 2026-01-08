---
title: NetDelete
---

`NetDelete[net, n]` deletes the nth layer from a `NetChain` or `NetGraph`.

- `NetDelete[net, "name"]` deletes a named layer.
- `NetDelete[net, {spec1, spec2, ...}]` deletes several layers simultaneously.
- `NetDelete[graph, NetPort["name"]]` deletes an output or state-input port from a `NetGraph`.
- `NetDelete[graph, {NetPort[name1], NetPort[name2], ...}]` deletes several output or state-input ports simultaneously.

## Examples

```wolfram
net = NetChain[{LinearLayer[], Ramp, LinearLayer[]}];
NetDelete[net, 2]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetDelete.html) for more details.