---
title: FileNameSplit
---

`FileNameSplit["name"]` splits a file path into a list of components.

## Examples

Split a path:

```wolfram
FileNameSplit["/path/to/file.txt"]
(* {"/", "path", "to", "file.txt"} *)
```

```wolfram
FileNameSplit["folder/subfolder/data.csv"]
(* {"folder", "subfolder", "data.csv"} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FileNameSplit.html) for more details.