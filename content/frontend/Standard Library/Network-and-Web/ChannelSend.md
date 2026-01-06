# ChannelSend

`ChannelSend[channel, msg]` sends the specified message msg to the specified channel.

## Examples

Send a simple message to a channel:

```wolfram
ChannelSend["myChannel", "Hello, World!"]
```

Send an association as a message:

```wolfram
ChannelSend["dataChannel", <|"value" -> 42, "timestamp" -> Now|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ChannelSend.html) for more details.*