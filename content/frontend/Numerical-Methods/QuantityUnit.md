---
title: QuantityUnit
---

`QuantityUnit[quantity]` returns the unit associated with the specified quantity.

## Examples

Extract the unit from a quantity:

```wolfram
QuantityUnit[Quantity[5, "Meters"]]
(* "Meters" *)
```

Get compound units:

```wolfram
QuantityUnit[Quantity[60, "Miles"/"Hours"]]
(* "Miles"/"Hours" *)
```

Extract from computed quantities:

```wolfram
QuantityUnit[Quantity[10, "Newtons"]*Quantity[2, "Meters"]]
(* "Joules" *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/QuantityUnit.html) for more details.