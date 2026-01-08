---
title: DirectoryQ
---

`DirectoryQ["name"]` gives `True` if the directory exists, and `False` otherwise.

## Examples

Check if directory exists:

```wolfram
DirectoryQ["/path/to/folder"]
(* True or False *)
```

Filter directories from files:

```wolfram
Select[FileNames["*"], DirectoryQ]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DirectoryQ.html) for more details.