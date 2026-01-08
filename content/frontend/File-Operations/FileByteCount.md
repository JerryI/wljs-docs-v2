---
title: FileByteCount
---

`FileByteCount[file]` gives the number of bytes in a file.

## Examples

Get file size:

```wolfram
FileByteCount["document.pdf"]
(* 1048576 *)
```

Human-readable size:

```wolfram
FileByteCount["image.png"] / 1024.0
(* 256.5 kilobytes *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FileByteCount.html) for more details.