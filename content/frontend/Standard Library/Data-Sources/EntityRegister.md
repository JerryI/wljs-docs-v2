---
title: EntityRegister
---

`EntityRegister[estore]` registers the entities in the entity store estore so that they can be accessed directly using Entity.

## Examples

Register an entity store:

```wolfram
store = EntityStore["MyType" -> <|"Entities" -> <|"a" -> <|"Name" -> "Alpha"|>|>|>];
EntityRegister[store]
```

Access registered entities:

```wolfram
Entity["MyType", "a"]["Name"]
(* "Alpha" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EntityRegister.html) for more details.*