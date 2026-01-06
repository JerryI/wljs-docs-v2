# AggregatedEntityClass

`AggregatedEntityClass[class,"prop"->f]` represents an entity class containing a single entity with the property prop whose value is the result of applying the function f to the whole specified entity class.

`AggregatedEntityClass[class,{prop1->f1,prop2->f2,…}]` constructs multiple properties propi obtained by applying fi to class.

`AggregatedEntityClass[class,propspec,gprop]` forms groups of elements of class according to their values of the property gprop, then generates an entity class with an entity for each of these groups.

`AggregatedEntityClass[class,propspec,"pname"->f]` forms groups according to the values obtained by applying the entity function f, with the resulting property named pname.

`AggregatedEntityClass[class,propspec,{gspec1,gspec2,…}]` forms groups for which the set of values defined by the gspeci is distinct.

## Examples

Aggregate country populations:

```wolfram
AggregatedEntityClass[EntityClass["Country", "Europe"], 
  "TotalPopulation" -> (EntityValue[#, "Population", "Total"] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AggregatedEntityClass.html) for more details.*