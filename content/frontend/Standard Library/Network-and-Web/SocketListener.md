---
title: SocketListener
---

`SocketListener[...]` represents a socket listener created by `SocketListen`.

## Examples

```wolfram
listener = SocketListen[8000, Print[#Data] &];
listener
```

```wolfram
Close[SocketListener[...]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SocketListener.html) for more details.*