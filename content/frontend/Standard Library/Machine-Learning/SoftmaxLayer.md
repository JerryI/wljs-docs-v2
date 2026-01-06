# SoftmaxLayer

`SoftmaxLayer[]` represents a softmax net layer.

- `SoftmaxLayer[n]` represents a softmax net layer that uses level n as the normalization dimension.

The softmax layer normalizes inputs to a probability distribution, commonly used as the final layer in classification networks.

## Examples

```wolfram
SoftmaxLayer[]
```

```wolfram
layer = SoftmaxLayer[];
layer[{1, 2, 3}]
```

```wolfram
(* Softmax along a specific dimension *)
SoftmaxLayer[1][{{1, 2}, {3, 4}}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SoftmaxLayer.html) for more details.*