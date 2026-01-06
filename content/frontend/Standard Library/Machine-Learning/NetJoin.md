---
title: NetJoin
---

`NetJoin[net1, net2, ...]` connects a series of NetChain or NetGraph objects to form a single NetChain or NetGraph.

## Examples

Join two networks:
```wolfram
NetJoin[NetChain[{LinearLayer[10]}], NetChain[{SoftmaxLayer[]}]]
```

Combine encoder and decoder:
```wolfram
NetJoin[encoder, decoder]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetJoin.html) for more details.*