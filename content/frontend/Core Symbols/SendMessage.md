# SendMessage

`SendMessage[channel, message]` sends a message to the specified channel.

- `SendMessage[channel -> dest, message]` sends a message to the destination dest through the specified channel.

## Examples

```wolfram
channel = CreateChannel[];
SendMessage[channel, "Hello World"]
```

```wolfram
SendMessage[channel, <|"data" -> 123|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SendMessage.html) for more details.*