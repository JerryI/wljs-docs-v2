# ChannelBrokerAction

`ChannelBrokerAction` is an option specifying the action to execute on the channel broker server in addition to routing a message.

## Examples

Send a message with a broker action:

```wolfram
ChannelSend["myChannel", "hello", ChannelBrokerAction -> "store"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ChannelBrokerAction.html) for more details.*