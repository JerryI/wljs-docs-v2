---
title: OpenWrite
---

`OpenWrite["file"]` opens a file for writing and returns an `OutputStream` object.

`OpenWrite[]` opens a new temporary file.

## Examples

Open a file for writing:

```wolfram
stream = OpenWrite["output.txt"]
(* OutputStream[...] *)
```

Write and close:

```wolfram
stream = OpenWrite["output.txt"];
WriteString[stream, "Hello, World!"];
Close[stream];
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OpenWrite.html) for more details.