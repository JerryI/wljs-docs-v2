# ReadProtected

`ReadProtected` is an attribute that prevents values associated with a symbol from being seen.

## Examples

```wolfram
SetAttributes[f, ReadProtected]
f[x_] := x^2
??f
```

```wolfram
Attributes[Plus]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReadProtected.html) for more details.*