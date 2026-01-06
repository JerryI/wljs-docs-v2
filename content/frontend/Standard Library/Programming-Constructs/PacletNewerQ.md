---
title: PacletNewerQ
---

`PacletNewerQ[paclet1, paclet2]` returns `True` if paclet1 has a higher version number than paclet2, and `False` otherwise.

## Examples

```wolfram
PacletNewerQ[PacletObject["MyPaclet" -> "2.0"], PacletObject["MyPaclet" -> "1.5"]]
```

```wolfram
PacletNewerQ["1.2.3", "1.2.0"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PacletNewerQ.html) for more details.*