---
title: PropertyValue
---

`PropertyValue[{obj, item}, name]` gives the property value associated with name for item in obj.

`PropertyValue[{obj, itemspec}, name]` gives the property values associated with name for items indicated by itemspec in obj.

`PropertyValue[..., {name1, name2, ...}]` gives a list of property values associated with name1, name2, etc.

## Examples

Get the weight property of an edge in a graph:

```wolfram
g = Graph[{1 -> 2, 2 -> 3}, EdgeWeight -> {1 -> 2 -> 5, 2 -> 3 -> 10}];
PropertyValue[{g, 1 -> 2}, EdgeWeight]
(* 5 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PropertyValue.html) for more details.*