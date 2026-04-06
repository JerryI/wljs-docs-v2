---
title: FileNameJoin
---

`FileNameJoin[{name1, name2, ...}]` joins path components into a file path.

## Examples

Join path components:

```wolfram
FileNameJoin[{"path", "to", "file.txt"}]
(* "path/to/file.txt" on Unix, "path\\to\\file.txt" on Windows *)
```

Create absolute path:

```wolfram
FileNameJoin[{$HomeDirectory, "Documents", "data.csv"}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FileNameJoin.html) for more details.