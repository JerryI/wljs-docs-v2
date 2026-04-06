---
title: FileNames
---

`FileNames[]` lists all files in the current working directory.

`FileNames[form]` lists files matching a string pattern.

`FileNames[forms, dirs, n]` includes files in subdirectories up to n levels deep.

## Examples

List all files:

```wolfram
FileNames[]
(* {"file1.txt", "file2.m", ...} *)
```

Find specific files:

```wolfram
FileNames["*.txt"]
(* {"data.txt", "notes.txt"} *)
```

Recursive search:

```wolfram
FileNames["*.m", {Directory[]}, Infinity]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FileNames.html) for more details.