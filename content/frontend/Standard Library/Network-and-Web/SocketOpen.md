---
title: SocketOpen
---

`SocketOpen[port]` opens a socket that accepts TCP connections to localhost:port and returns a SocketObject representing the socket.

`SocketOpen[address]` opens a socket that accepts TCP connections to the specified local address.

`SocketOpen[address,"protocol"]` opens a socket that accepts connections with the specified protocol.

`SocketOpen[address,{"protocol","type"}]` opens a socket that accepts connections of the specified protocol and type.

## Examples

```wolfram
SocketOpen[8080]
(* SocketObject[...] *)
```

```wolfram
SocketOpen["localhost:9000"]
(* SocketObject[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SocketOpen.html) for more details.*