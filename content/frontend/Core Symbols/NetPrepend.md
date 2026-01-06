# NetPrepend

`NetPrepend[net, layer]` prepends a layer or a net onto a `NetChain`, a layer or a `NetGraph` with one input port.

- `NetPrepend[net, "name" -> layer]` appends a layer with a given name.
- `NetPrepend[net, {layer1, layer2, ...}]` prepends several layers or nets.

## Examples

```wolfram
NetPrepend[LinearLayer[10], LinearLayer[5]]
```

```wolfram
NetPrepend[NetChain[{LinearLayer[10]}], ElementwiseLayer[Tanh]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetPrepend.html) for more details.*