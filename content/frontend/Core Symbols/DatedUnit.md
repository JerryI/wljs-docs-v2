# DatedUnit

`DatedUnit[unit, date]` represents the specified unit at a specific date.

## Examples

Currency at a specific date:

```wolfram
Quantity[100, DatedUnit["USDollars", {2020, 1, 1}]]
```

Convert historical currency:

```wolfram
UnitConvert[Quantity[100, DatedUnit["USDollars", {2010, 1, 1}]], "Euros"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DatedUnit.html) for more details.*