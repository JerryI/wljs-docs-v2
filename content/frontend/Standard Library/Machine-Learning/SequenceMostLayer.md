# SequenceMostLayer

`SequenceMostLayer[]` represents a net that takes a sequence of inputs and removes its last element.

## Examples

Create a sequence most layer:

```wolfram
SequenceMostLayer[]
```

Use in a neural network:

```wolfram
NetChain[{SequenceMostLayer[], SummationLayer[]}]
```

Apply to sequence data:

```wolfram
net = NetInitialize[SequenceMostLayer[]];
net[{{1, 2}, {3, 4}, {5, 6}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SequenceMostLayer.html) for more details.*