# EntityList

`EntityList[class]` gives a list of entities in the specified entity class.

`EntityList["type"]` gives a list of entities of the specified type.

## Examples

List all countries:

```wolfram
EntityList["Country"] // Length
```

List entities in a class:

```wolfram
EntityList[EntityClass["Country", "European"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EntityList.html) for more details.*