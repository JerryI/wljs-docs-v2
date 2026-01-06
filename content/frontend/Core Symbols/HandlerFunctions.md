# HandlerFunctions

`HandlerFunctions` is an option that specifies functions to apply when events are generated.

## Examples

```wolfram
URLRead[url, HandlerFunctions -> <|"HeadersReceived" -> Print|>]
```

```wolfram
WebSocketConnect[url, HandlerFunctions -> <|"MessageReceived" -> handleMessage|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HandlerFunctions.html) for more details.*