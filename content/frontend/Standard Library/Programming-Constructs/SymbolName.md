---
title: SymbolName
---

`SymbolName[symbol]` gives the name of the specified symbol as a string.

## Examples

Get the name of a symbol:

```wolfram
SymbolName[Sin]
(* "Sin" *)
```

Get name of a variable:

```wolfram
SymbolName[x]
(* "x" *)
```

Useful in meta-programming:

```wolfram
SymbolName /@ {Plus, Times, Power}
(* {"Plus", "Times", "Power"} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SymbolName.html) for more details.*