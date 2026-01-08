---
title: FileExistsQ
---

`FileExistsQ["name"]` gives `True` if the file exists, and `False` otherwise.

## Examples

Check if file exists:

```wolfram
FileExistsQ["/path/to/file.txt"]
(* True or False *)
```

Conditional loading:

```wolfram
If[FileExistsQ["config.m"], Get["config.m"]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FileExistsQ.html) for more details.