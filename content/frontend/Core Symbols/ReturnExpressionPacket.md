# ReturnExpressionPacket

`ReturnExpressionPacket[expr]` is a WSTP packet that contains the expression expr, the result of an `EnterExpressionPacket` evaluation.

## Examples

```wolfram
ReturnExpressionPacket[1 + 1]
```

```wolfram
LinkRead[link] (* May return ReturnExpressionPacket[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReturnExpressionPacket.html) for more details.*