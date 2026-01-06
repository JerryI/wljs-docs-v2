---
title: SocketReadyQ
---

`SocketReadyQ[socket]` tests if there is any data immediately available to read from the specified socket.

`SocketReadyQ[socket, t]` waits for up to t seconds to see if data becomes available to read.

## Examples

```wolfram
socket = SocketConnect["example.com:80"];
SocketReadyQ[socket]
(* False *)
```

```wolfram
SocketReadyQ[socket, 5]
(* Wait up to 5 seconds *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SocketReadyQ.html) for more details.*