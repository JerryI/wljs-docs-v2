# EntityStore

`EntityStore["type"]` represents an empty entity store for entities of type "type".

`EntityStore["type" -> data]` represents an entity store for entities of type "type" with properties and values defined by data.

`EntityStore[{tspec1, tspec2, ...}]` represents an entity store for entities of multiple types.

`EntityStore[RelationalDatabase[...]]` constructs an entity store from the schema of an external database.

## Examples

Create an entity store:

```wolfram
EntityStore["Person" -> <|"Alice" -> <|"Age" -> 25|>|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EntityStore.html) for more details.*