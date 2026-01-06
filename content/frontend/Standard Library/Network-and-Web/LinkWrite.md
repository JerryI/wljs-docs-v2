# LinkWrite

`LinkWrite[link, expr]` writes expr to the specified WSTP connection.

## Examples

Write an expression to a link:

```wolfram
link = LinkLaunch[First[$CommandLine] <> " -wstp"];
LinkWrite[link, Unevaluated[1 + 1]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinkWrite.html) for more details.*