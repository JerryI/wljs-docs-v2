---
title: Entity
---

`Entity["type", name]` represents a real-world entity (country, chemical, star, etc.) from Wolfram's curated data.

## Examples

Access entity data:

```wolfram
Entity["Country", "France"]

Entity["Planet", "Mars"]["Mass"]
(* Quantity[6.4171*10^23, "Kilograms"] *)

Entity["Chemical", "Water"]["MolecularFormula"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Entity.html) for more details.*