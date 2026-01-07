---
title: NetSharedArray
---

`NetSharedArray["name"]` represents an array in a net that is shared by more than one layer.

## Examples

Create a network with a shared array:

```wolfram
net = NetGraph[
  {LinearLayer[], LinearLayer[]},
  {1 -> 2},
  "Weights" -> NetSharedArray["sharedWeights"]
]
```

Access shared arrays in a network:

```wolfram
NetExtract[trainedNet, "sharedWeights"]
```

Initialize shared arrays:

```wolfram
NetInitialize[net, All, "Weights" -> NetSharedArray["w"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetSharedArray.html) for more details.*