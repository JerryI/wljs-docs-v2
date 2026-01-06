# SocketWaitNext

`SocketWaitNext[{socket1, socket2, ...}]` waits until there is data ready to read on any of the socketi, then returns that socket.

## Examples

```wolfram
sockets = {SocketConnect["tcp://localhost:8000"], SocketConnect["tcp://localhost:8001"]};
SocketWaitNext[sockets]
```

```wolfram
SocketWaitNext[{socket1, socket2}, 10]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SocketWaitNext.html) for more details.*