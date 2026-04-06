---
title: DirectoryName
---

`DirectoryName["name"]` extracts the directory name from the specification for a file.

## Examples

Get directory from file path:

```wolfram
DirectoryName["/path/to/file.txt"]
(* "/path/to/" *)
```

Multiple levels:

```wolfram
DirectoryName["/a/b/c/d.txt", 2]
(* "/a/b/" *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DirectoryName.html) for more details.