---
title: NetPairEmbeddingOperator
---

`NetPairEmbeddingOperator[net]` represents a net that takes a pair of arrays, embeds them into a vector space using net, and outputs the distance under the embedding.

- `NetPairEmbeddingOperator[net, opts]` includes options for distance function to use and other parameters.

This is used for similarity learning and metric learning tasks.

## Examples

```wolfram
NetPairEmbeddingOperator[LinearLayer[10]]
```

```wolfram
NetPairEmbeddingOperator[NetChain[{LinearLayer[20], Ramp, LinearLayer[10]}], 
  DistanceFunction -> CosineDistance]
```

```wolfram
NetPairEmbeddingOperator[encoder, "DistanceFunction" -> EuclideanDistance]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetPairEmbeddingOperator.html) for more details.