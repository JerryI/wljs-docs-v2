---
title: FindFile
---

`FindFile[name]` finds the file with the specified name that would be loaded by Get[name] and related functions.

## Examples

```wolfram
(* Find a package file *)
FindFile["ExampleData/sample.txt"]

(* Find a context file *)
FindFile["Combinatorica`"]

(* Returns $Failed if not found *)
FindFile["NonExistentFile"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindFile.html) for more details.