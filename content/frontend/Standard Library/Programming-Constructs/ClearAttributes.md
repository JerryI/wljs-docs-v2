# ClearAttributes

`ClearAttributes[symbol, attr]` removes attr from the list of attributes of the symbol.

## Examples

Remove Listable attribute:

```wolfram
SetAttributes[f, Listable]
ClearAttributes[f, Listable]
Attributes[f]
(* {} *)
```

Remove multiple attributes:

```wolfram
ClearAttributes[g, {Flat, Orderless}]
```

Remove from multiple symbols:

```wolfram
ClearAttributes[{f, g}, Listable]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ClearAttributes.html) for more details.*