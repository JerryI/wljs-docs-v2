---
title: EntityProperty
---

`EntityProperty[type, pname]` represents a property identified by pname for use in EntityValue.

`EntityProperty[class, pname]` represents a property introduced by the computed entity class class.

`EntityProperty[type, pname, {qual1->val1, qual2->val2, …}]` represents a property modified by the qualifier rules quali->vali.

## Examples

Get a property of a country:

```wolfram
EntityValue[Entity["Country", "France"], EntityProperty["Country", "Population"]]
```

Use a qualified property:

```wolfram
EntityProperty["Country", "Population", {"Date" -> 2020}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EntityProperty.html) for more details.