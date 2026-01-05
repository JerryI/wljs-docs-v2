# MessagePacket

`MessagePacket[symbol,string]` is a WSTP packet containing a Wolfram Language message identifier of the form symbol::string.

## Examples

A message packet structure:

```wolfram
MessagePacket[General, "argx"]
```

Handle message packets in WSTP communication:

```wolfram
(* Typically received when processing kernel messages *)
MessagePacket[Sin, "argx"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MessagePacket.html) for more details.*