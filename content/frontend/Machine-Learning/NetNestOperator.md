---
title: NetNestOperator
---

`NetNestOperator[net, n]` represents a net in which net is applied n times to the input.

This operator creates a network that iteratively applies the same network multiple times.

## Examples

```wolfram
NetNestOperator[LinearLayer[5], 3]
```

```wolfram
op = NetNestOperator[ElementwiseLayer[Tanh], 2];
op[{1, 2, 3}]
```

```wolfram
NetNestOperator[NetChain[{LinearLayer[10], Ramp}], 4]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetNestOperator.html) for more details.