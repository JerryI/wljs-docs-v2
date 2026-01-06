# CommonUnits

`CommonUnits[{quantity1,quantity2,…,quantityn}]` converts quantity1 through quantityn to common units across compatible dimensions.

## Examples

Convert quantities to common units:

```wolfram
CommonUnits[{Quantity[1, "Meters"], Quantity[50, "Centimeters"]}]
(* {Quantity[1, "Meters"], Quantity[0.5, "Meters"]} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CommonUnits.html) for more details.*