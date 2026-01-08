---
title: FullDefinition
---

`FullDefinition[symbol]` prints as the definitions given for symbol, and all symbols on which these depend.

`FullDefinition["symbol"]` prints as the definitions given for the symbol named "symbol" if it exists, and all symbols on which these depend.

`FullDefinition[patt]` prints as the definitions given for the symbols whose names textually match the arbitrary string pattern patt, and all symbols on which these depend.

`FullDefinition[{spec1, spec2, ...}]` prints as the definitions given for the symbols that are equal to or whose names match any of the speci, and all symbols on which these depend.

## Examples

Define a function and show its full definition:

```wolfram
f[x_] := g[x] + 1;
g[x_] := x^2;
FullDefinition[f]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FullDefinition.html) for more details.