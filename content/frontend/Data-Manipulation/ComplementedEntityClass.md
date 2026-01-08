---
title: ComplementedEntityClass
---

`ComplementedEntityClass[classall,class1,…]` represents an entity class containing all the entities in classall that are not in any of the classi.

## Examples

Get countries not in Europe:

```wolfram
ComplementedEntityClass[EntityClass["Country", "Countries"], EntityClass["Country", "Europe"]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ComplementedEntityClass.html) for more details.