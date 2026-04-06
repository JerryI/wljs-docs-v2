---
title: FileNameDepth
---

`FileNameDepth["name"]` gives the number of path elements in the file name.

## Examples

Count path elements:

```wolfram
FileNameDepth["/path/to/file.txt"]
(* 4 *)
```

Relative path:

```wolfram
FileNameDepth["folder/subfolder/data.csv"]
(* 3 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FileNameDepth.html) for more details.