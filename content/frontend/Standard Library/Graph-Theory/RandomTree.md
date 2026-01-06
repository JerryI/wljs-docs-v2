---
title: RandomTree
---

`RandomTree[n]` gives a pseudorandom tree with n nodes.

- `RandomTree[n, k]` gives a list of k pseudorandom trees.
- `RandomTree[n, {k1, k2, ...}]` gives a k1×k2×... array of trees.

## Examples

Generate a random tree with 10 nodes:

```wolfram
RandomTree[10]
```

Create multiple random trees:

```wolfram
RandomTree[5, 3]
```

Generate a random tree with a specific distribution:

```wolfram
RandomTree[12, TreeLayout -> "RadialEmbedding"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RandomTree.html) for more details.*