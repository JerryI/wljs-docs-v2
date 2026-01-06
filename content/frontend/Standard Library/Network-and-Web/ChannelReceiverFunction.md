# ChannelReceiverFunction

`ChannelReceiverFunction[fun]` represents a channel receiver function that applies fun to any channel message it receives.

## Examples

Create a receiver function that processes messages:

```wolfram
receiver = ChannelReceiverFunction[Function[msg, Print["Received: ", msg]]]
(* ChannelReceiverFunction[...] *)
```



*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ChannelReceiverFunction.html) for more details.*