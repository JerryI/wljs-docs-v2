# Typed

`Typed[expr, type]` represents an expression that should be assumed to be of a specified type for compilation and other purposes.

## Examples

```wolfram
Typed[x, "Real64"]
```

```wolfram
FunctionCompile[Function[{Typed[x, "Integer64"]}, x + 1]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Typed.html) for more details.*