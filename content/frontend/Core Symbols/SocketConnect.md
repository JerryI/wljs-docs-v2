# SocketConnect

`SocketConnect[address]` makes a socket connection to the TCP host at the specified address and returns a SocketObject representing the connection.

- `SocketConnect[address, "protocol"]` makes a connection to the host at address with the specified protocol.
- `SocketConnect[socket]` makes a connection to a local socket opened in the current session.

## Examples

```wolfram
SocketConnect["www.example.com:80"]
```

```wolfram
SocketConnect["localhost:8080", "TCP"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SocketConnect.html) for more details.*