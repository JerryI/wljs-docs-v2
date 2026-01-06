# SetAttributes

`SetAttributes[symbol, attr]` adds attr to the list of attributes of the symbol.

## Examples

Make a function listable:

```wolfram
f[x_] := x^2;
SetAttributes[f, Listable]
f[{1, 2, 3}]
(* {1, 4, 9} *)
```

Set multiple attributes:

```wolfram
SetAttributes[g, {Flat, Orderless}]
```

Make a function hold its arguments:

```wolfram
SetAttributes[h, HoldAll]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SetAttributes.html) for more details.*