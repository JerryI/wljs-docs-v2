---
title: EntityValue
---

`EntityValue[entity, property]` gets the value of a property for an entity. Can query multiple entities or properties at once.

## Examples

Query entity properties:

```wolfram
EntityValue[Entity["Country", "Japan"], "Population"]
(* Quantity[1.258*10^8, "People"] *)

(* Multiple properties *)
EntityValue[Entity["Country", "Germany"], {"Capital", "Area"}]

(* Multiple entities *)
EntityValue[{Entity["Planet", "Earth"], Entity["Planet", "Mars"]}, "Radius"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EntityValue.html) for more details.*