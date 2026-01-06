# NetReplacePart

`NetReplacePart[layer, "array" -> value]` replaces an array within a layer, returning a new layer.

- `NetReplacePart[net, "port" -> type]` returns a new layer or network in which an input or output port has the specified type.
- `NetReplacePart[net, "input" -> encoder]` attaches a NetEncoder[…] to a specified input port.
- `NetReplacePart[net, "output" -> decoder]` attaches a NetDecoder[…] to a specified output port.
- `NetReplacePart[net, lspec -> layer]` returns a new NetChain or NetGraph in which the layer identified by lspec has been replaced.
- `NetReplacePart[net, NetArray[name] -> value]` sets a shared array within a network or layer to a specified value.
- `NetReplacePart[coder, "param" -> value]` returns a new NetEncoder[…] or NetDecoder[…] in which a parameter has been replaced.
- `NetReplacePart[net, {lspec, pspec} -> value]` makes a replacement of a part pspec of a layer or coder lspec within a NetGraph or NetChain.
- `NetReplacePart[..., {spec1 -> val1, spec2 -> val2, ...}]` makes multiple simultaneous replacements.

## Examples

```wolfram
net = NetChain[{LinearLayer[10], LinearLayer[5]}];
NetReplacePart[net, "Input" -> 20]
```

```wolfram
NetReplacePart[LinearLayer[], "Weights" -> RandomReal[1, {10, 5}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetReplacePart.html) for more details.*