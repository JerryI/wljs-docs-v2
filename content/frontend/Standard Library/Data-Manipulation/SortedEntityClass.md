---
title: SortedEntityClass
---

`SortedEntityClass[class,prop]` represents an entity class derived from class by sorting according to the values of the property prop.

`SortedEntityClass[class,prop->"order"]` sorts according to prop in the order specified.

`SortedEntityClass[class,{prop1,prop2,…}]` breaks ties by successively using the values of the property specifications propi.

`SortedEntityClass[class,sortspec,n]` represents the first n entities of class when sorted by sortspec.

`SortedEntityClass[class,sortspec,{m,n}]` represents the entities m through n of class when sorted by sortspec.

## Examples

Get countries sorted by population:

```wolfram
SortedEntityClass["Country", "Population" -> "Descending", 5]
(* SortedEntityClass[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SortedEntityClass.html) for more details.*