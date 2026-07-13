---
title: EntityClass
---

`EntityClass[type, name]` represents a class of entities of the specified type identified by name.

`EntityClass[type, {property1 -> vspec1, ...}]` represents an implicitly defined entity class containing entities for which properties conform to value specifications.

## Examples

Named entity class:

```wolfram
EntityClass["Country", "G20"]
```

Filtered entity class:

```wolfram
EntityClass["Country", "Population" -> GreaterThan[Quantity[100000000, "People"]]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EntityClass.html) for more details.
