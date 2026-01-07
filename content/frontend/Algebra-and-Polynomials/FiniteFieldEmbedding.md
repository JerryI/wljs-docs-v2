---
title: FiniteFieldEmbedding
---

`FiniteFieldEmbedding[ff1, ff2]` gives an embedding of the finite field ff1 in the finite field ff2.

- `FiniteFieldEmbedding[e1 -> e2]` represents the embedding of the ambient field of e1 in the ambient field of e2, which maps e1 to e2.

## Examples

Create an embedding between finite fields:

```wolfram
ff1 = FiniteField[2, 2];
ff2 = FiniteField[2, 4];
emb = FiniteFieldEmbedding[ff1, ff2]
```

Apply the embedding to an element:

```wolfram
a = ff1["PrimitiveElement"];
emb[a]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FiniteFieldEmbedding.html) for more details.*