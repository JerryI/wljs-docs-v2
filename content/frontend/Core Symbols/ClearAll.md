# ClearAll

`ClearAll[s1, s2, ...]` clears all values, definitions, attributes, defaults, options, and messages for the symbols.

## Examples

Clear everything about a symbol:

```wolfram
f[x_] := x^2;
Attributes[f] = {Listable};
ClearAll[f]
(* f is now completely undefined *)
```

Clear by pattern:

```wolfram
ClearAll["Global`*"]
(* Clears all user-defined symbols *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ClearAll.html) for more details.*