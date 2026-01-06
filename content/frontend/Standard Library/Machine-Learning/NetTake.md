---
title: NetTake
---

`NetTake[net, end]` takes only those layers up to end in a NetChain or NetGraph.

- `NetTake[net, {start, end}]` takes only layers between start and end.

## Examples

```wolfram
NetTake[trainedNet, 5]
```

```wolfram
NetTake[net, {"input", "conv3"}]
```

```wolfram
NetTake[NetModel["ResNet-50"], {1, 10}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetTake.html) for more details.*