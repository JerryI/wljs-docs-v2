# IntersectedEntityClass

`IntersectedEntityClass[class1, class2, ...]` represents an entity class containing all the entities common to all classi.

## Examples

Find countries that are in both Europe and the European Union:

```wolfram
IntersectedEntityClass[
  EntityClass["Country", "Europe"],
  EntityClass["Country", "EuropeanUnion"]
]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IntersectedEntityClass.html) for more details.*