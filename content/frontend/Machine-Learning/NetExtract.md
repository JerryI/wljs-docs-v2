---
title: NetExtract
---

`NetExtract[layer, "param"]` extracts the value of a parameter for the specified net layer.

- `NetExtract[net, lspec]` extracts the layer identified by lspec from within the NetGraph or NetChain object net.
- `NetExtract[net, {lspec, "param"}]` extracts the value of the parameter param from the layer identified by lspec in net.
- `NetExtract[net, NetArray[spec]]` extracts the value of a shared array within a network or layer.
- `NetExtract[coder, "param"]` extracts the value of a parameter for the specified NetEncoder or NetDecoder.
- `NetExtract[..., {spec1, spec2, ...}]` extracts a set of elements, where each speci is a list.

## Examples

Extract weights from a layer:

```wolfram
layer = LinearLayer[3, "Input" -> 5];
layer = NetInitialize[layer];
NetExtract[layer, "Weights"]
```

Extract a layer from a chain:

```wolfram
net = NetChain[{LinearLayer[10], Ramp, LinearLayer[5]}];
NetExtract[net, 2]
```

Extract biases:

```wolfram
NetExtract[NetInitialize[LinearLayer[5]], "Biases"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetExtract.html) for more details.*