# MovieData

`MovieData[entity, property]` gives the value of the specified *property* for the movie *entity*.

- `MovieData[{entity1, entity2, ...}, property]` gives a list of property values for the specified movie entities.
- `MovieData[entity, property, annotation]` gives the specified *annotation* associated with the given property.

## Examples

```wolfram
MovieData[Entity["Movie", "Inception2010"], "Director"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MovieData.html) for more details.*