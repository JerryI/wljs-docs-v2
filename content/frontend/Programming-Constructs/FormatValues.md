---
title: FormatValues
---

`FormatValues[f]` gives a list of transformation rules corresponding to all printing formats (values for Format[f[x, ...], ...], etc.) defined for the symbol f.

## Examples

Define a format for a symbol:

```wolfram
Format[mySymbol[x_]] := Framed[x]
FormatValues[mySymbol]
```

Check format values for a built-in symbol:

```wolfram
FormatValues[Plus]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FormatValues.html) for more details.