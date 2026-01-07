---
title: NetInformation
---

`NetInformation[net]` gives a report about the neural network net.

- `NetInformation[net, "prop"]` gives the value of property "prop" of net.
- `NetInformation[{net1, net2, ...}, "prop"]` gives a list containing the result for each neti.

## Examples

Get information about a network:

```wolfram
NetInformation[NetChain[{LinearLayer[10], Ramp}]]
```

Get specific property:

```wolfram
NetInformation[NetChain[{LinearLayer[10]}], "ParameterCount"]
```

List all properties:

```wolfram
NetInformation[NetChain[{LinearLayer[10]}], "Properties"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetInformation.html) for more details.*