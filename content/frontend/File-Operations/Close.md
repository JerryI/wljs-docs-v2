---
title: Close
---

`Close[stream]` closes a stream or socket.

## Examples

Close a file stream:

```wolfram
stream = OpenRead["file.txt"];
data = ReadList[stream];
Close[stream]
(* "file.txt" *)
```

Close returns the name of the closed stream.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Close.html) for more details.