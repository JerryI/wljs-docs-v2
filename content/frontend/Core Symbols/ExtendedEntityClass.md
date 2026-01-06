# ExtendedEntityClass

`ExtendedEntityClass[class, "name" -> f]` represents an entity class derived from class by adding a new computed property "name" whose value for each entity is obtained by applying the entity function f.

`ExtendedEntityClass[class, {name1 -> f1, name2 -> f2, ...}]` adds the properties namei defined by the functions fi.

## Examples

Extend an entity class with a computed property:

```wolfram
ExtendedEntityClass["Country", "Density" -> EntityFunction[e, e["Population"]/e["Area"]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExtendedEntityClass.html) for more details.*