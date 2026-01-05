# ChannelBase

`ChannelBase` is an option specifying the base URL of the server to use for brokering channel communications.

## Examples

Specify a custom channel server:

```wolfram
ChannelListen["channel", ChannelBase -> "https://example.com"]
(* ChannelListener[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ChannelBase.html) for more details.*