# CommonName

`CommonName[entity]` gives the common name for the entity specified by entity.

`CommonName[{entity1, ..., entityn}]` gives the common name for multiple entities.

## Examples

Get the common name of an entity:

```wolfram
CommonName[Entity["Country", "France"]]
(* "France" *)
```

Multiple entities:

```wolfram
CommonName[{Entity["Country", "Germany"], Entity["Country", "Japan"]}]
(* {"Germany", "Japan"} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CommonName.html) for more details.*