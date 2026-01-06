# QuantityArray

`QuantityArray[mags,unit]` represents an array of quantities with magnitudes mags and common unit.

`QuantityArray[mags,{unit1,unit2,…}]` represents an array of lists of quantities with units {unit1,unit2,…}.

`QuantityArray[quants]` converts an array of Quantity objects into a single QuantityArray object.

## Examples

Create a quantity array with common unit:

```wolfram
QuantityArray[{1, 2, 3}, "Meters"]
(* QuantityArray[{1, 2, 3}, "Meters"] *)
```

Convert an array of quantities:

```wolfram
QuantityArray[{Quantity[1, "Meters"], Quantity[2, "Meters"]}]
(* QuantityArray[{1, 2}, "Meters"] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/QuantityArray.html) for more details.*