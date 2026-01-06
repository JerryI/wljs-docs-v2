# ChannelListen

`ChannelListen[channel]` starts listening on the specified channel.

`ChannelListen[channel, func]` applies func to the association corresponding to each message received on the channel.

`ChannelListen[channel, None]` stores each message received on the channel without applying any function.

## Examples

Listen to a channel and print received messages:

```wolfram
listener = ChannelListen["myChannel", Print]
(* ChannelListener[...] *)
```

Listen and store messages without processing:

```wolfram
listener = ChannelListen["dataChannel", None]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ChannelListen.html) for more details.*