# CombinedEntityClass

`CombinedEntityClass[class1, class2, prop]` represents a class of entities obtained by combining pairs from class1 and class2 where the property prop has the same value.

`CombinedEntityClass[class1, class2, prop1 -> prop2]` combines pairs where prop1 from class1 equals prop2 from class2.

## Examples

Combine entity classes by matching property:

```wolfram
CombinedEntityClass["City", "Country", "Country"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CombinedEntityClass.html) for more details.*