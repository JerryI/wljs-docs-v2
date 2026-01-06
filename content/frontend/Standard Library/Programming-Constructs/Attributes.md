# Attributes

`Attributes[symbol]` gives the list of attributes for a symbol.

## Examples

Get attributes of a symbol:

```wolfram
Attributes[Plus]
(* {Flat, Listable, NumericFunction, OneIdentity, Orderless, Protected} *)
```

Check attributes of multiple symbols:

```wolfram
Attributes[{Sin, Cos}]
(* {{Listable, NumericFunction, Protected}, ...} *)
```

User-defined symbol:

```wolfram
Attributes[myFunc]
(* {} - no attributes by default *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Attributes.html) for more details.*