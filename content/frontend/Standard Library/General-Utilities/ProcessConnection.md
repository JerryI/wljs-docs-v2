---
title: ProcessConnection
---

`ProcessConnection[proc, "stream"]` returns the stream object for a given stream.

## Examples

```wolfram
proc = StartProcess[$SystemShell];
ProcessConnection[proc, "StandardOutput"]
(* InputStream[...] *)
```

```wolfram
ProcessConnection[proc, "StandardInput"]
(* OutputStream[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ProcessConnection.html) for more details.*