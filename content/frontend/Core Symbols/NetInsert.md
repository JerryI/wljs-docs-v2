# NetInsert

`NetInsert[chain, layer, i]` inserts a layer into a NetChain before the layer at position i.

- `NetInsert[chain, "name" -> layer, "pos"]` inserts a named layer into a NetChain before the layer at the given position.

This function adds layers to an existing neural network chain.

## Examples

```wolfram
chain = NetChain[{LinearLayer[10], Ramp}];
NetInsert[chain, BatchNormalizationLayer[], 2]
```

```wolfram
NetInsert[NetChain[{LinearLayer[5], SoftmaxLayer[]}], DropoutLayer[], 2]
```

```wolfram
NetInsert[chain, "bn" -> BatchNormalizationLayer[], 2]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetInsert.html) for more details.*