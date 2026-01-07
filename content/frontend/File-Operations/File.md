---
title: File
---

`File["path"]` is a symbolic representation of a location in the local file system.

## Examples

Create a file reference:

```wolfram
file = File["/path/to/document.txt"]
(* File["/path/to/document.txt"] *)
```

Use with Import:

```wolfram
Import[File["data.csv"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/File.html) for more details.*