# EntityInstance

`EntityInstance[entity, qual -> val]` represents an entity whose qualifier qual has value val.

`EntityInstance[entity, {qual1 -> val1, qual2 -> val2, ...}]` represents an entity whose qualifiers quali have values vali.

`EntityInstance[entity, quantity]` represents an entity qualified by quantity.

## Examples

Create a qualified entity instance:

```wolfram
EntityInstance[Entity["Country", "France"], "Date" -> DateObject[{2020}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EntityInstance.html) for more details.*