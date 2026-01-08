---
title: NetPort
---

`NetPort["port"]` represents the specified input or output port for a complete net.

`NetPort[{n,"port"}]` represents the specified port for layer number n in a NetGraph or similar construct.

`NetPort[{"name","port"}]` represents the specified port for the layer with the specified name.

`NetPort[spec,port]` is treated as equivalent to `NetPort[{spec,port}]`.

`NetPort[{spec1,spec2,…,"port"}]` permits access to the port of nested layers in a NetGraph or a NetChain.

`NetPort[All,"States"]` represents the set of all states in a net associated with recurrent layers such as `LongShortTermMemoryLayer`.

## Examples

```wolfram
NetPort["Input"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetPort.html) for more details.