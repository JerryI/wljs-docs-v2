# ChannelHistoryLength

`ChannelHistoryLength` is an option to `ChannelListen` that specifies the maximum number of messages to cache in the channel listener object.

## Examples

Listen to a channel with a history length of 10:

```wolfram
ChannelListen["channel", ChannelHistoryLength -> 10]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ChannelHistoryLength.html) for more details.*