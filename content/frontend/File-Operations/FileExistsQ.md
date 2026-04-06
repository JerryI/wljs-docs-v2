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


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FileExistsQ.html) for more details.