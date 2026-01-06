---
title: CreateFile
---

`CreateFile["file"]` creates a file with name file.

`CreateFile[]` creates a file in the default area for temporary files on your computer system.

## Examples

Create a temporary file:

```wolfram
CreateFile[]
(* /var/folders/.../tmp12345 *)
```

Create a named file:

```wolfram
CreateFile["myfile.txt"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CreateFile.html) for more details.*