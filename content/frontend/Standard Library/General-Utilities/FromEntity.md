---
title: FromEntity
---

`FromEntity[entity]` returns a Wolfram Language object corresponding to an entity.

## Examples

Convert a country entity to a geographic region:

```wolfram
FromEntity[Entity["Country", "France"]]
```

Convert a color entity:

```wolfram
FromEntity[Entity["Color", "Red"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FromEntity.html) for more details.*