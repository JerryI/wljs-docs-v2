---
title: NetMapThreadOperator
---

`NetMapThreadOperator[mapnet]` represents a net in which mapnet is mapped over one or more inputs to give one or more outputs.

- `NetMapThreadOperator[mapnet, n]` represents a net in which mapnet is mapped over its inputs at depth n.
- `NetMapThreadOperator[mapnet, <|input1 -> n1, input2 -> n2, ...|>]` represents a net in which mapnet is mapped over the input named inputi at depth ni, and all other inputs are replicated.

This operator is useful for applying a neural network across sequences or batches.

## Examples

```wolfram
NetMapThreadOperator[LinearLayer[5]]
```

```wolfram
net = NetMapThreadOperator[LinearLayer[3], 1];
net[RandomReal[1, {4, 10}]]
```

```wolfram
NetMapThreadOperator[ElementwiseLayer["ReLU"], 2]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetMapThreadOperator.html) for more details.