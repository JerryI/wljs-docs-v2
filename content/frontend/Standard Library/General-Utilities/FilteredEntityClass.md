# FilteredEntityClass

`FilteredEntityClass[class,f]` represents a class of entities where only entities for which the EntityFunction object f yields True are kept.

`FilteredEntityClass[class,prop]` represents a class of entities where only entities for which the property prop is True are kept.

## Examples

```wolfram
(* Filter countries by population *)
FilteredEntityClass["Country", 
  EntityFunction[c, c["Population"] > Quantity[100000000, "People"]]]

(* Filter using a property *)
FilteredEntityClass["Country", "Landlocked"]

(* Combine with EntityList *)
EntityList[FilteredEntityClass["Country", "European"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FilteredEntityClass.html) for more details.*