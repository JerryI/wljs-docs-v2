# SyntaxPacket

`SyntaxPacket[integer]` is a WSTP packet where integer indicates the position at which a syntax error was detected in the input line.

## Examples

```wolfram
SyntaxPacket[5]
```

```wolfram
LinkRead[link] (* May return SyntaxPacket[...] on syntax error *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SyntaxPacket.html) for more details.*