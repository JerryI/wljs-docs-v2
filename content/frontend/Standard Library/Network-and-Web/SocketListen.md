# SocketListen

`SocketListen[socket, fun]` starts listening on the specified socket, asynchronously applying fun whenever data is received on the socket.

- `SocketListen[port, fun]` starts listening for active connections on the specified port of 127.0.0.1.
- `SocketListen[address, fun]` starts listening for active connections on the specified address on the local machine.
- `SocketListen[spec]` starts listening for active connections defined by spec, but does not set up handler functions.

## Examples

```wolfram
SocketListen[8080, Print[#Data] &]
```

```wolfram
listener = SocketListen[SocketOpen[8000], Function[Print["Received: ", #Data]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SocketListen.html) for more details.*