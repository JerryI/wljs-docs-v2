---
title: FileNameTake
---

`FileNameTake["name"]` gives the last path element (filename) from a path.

`FileNameTake["name", n]` gives the first n path elements.

`FileNameTake["name", -n]` gives the last n path elements.

## Examples

Get filename:

```wolfram
FileNameTake["/path/to/file.txt"]
(* "file.txt" *)
```

Get parent directory:

```wolfram
FileNameTake["/path/to/file.txt", -2]
(* "to/file.txt" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FileNameTake.html) for more details.*