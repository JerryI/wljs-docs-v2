---
title: ToFileName
---

`ToFileName["directory", "name"]` assembles a full file name from a directory name and a file name.

- `ToFileName[{dir1, dir2, ...}, name]` assembles a full file name from a hierarchy of directory names.
- `ToFileName[{dir1, dir2, ...}]` assembles a single directory name from a hierarchy of directory names.

## Examples

Create a file path:
```wolfram
ToFileName["/home/user", "file.txt"]
```

Build from directory hierarchy:
```wolfram
ToFileName[{"home", "user", "documents"}, "report.pdf"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ToFileName.html) for more details.