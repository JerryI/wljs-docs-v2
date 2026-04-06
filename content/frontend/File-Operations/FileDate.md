---
title: FileDate
---

`FileDate["file"]` gives the date and time the file was last modified.

`FileDate["file", "type"]` gives info on the specified date type.

## Examples

Get modification date:

```wolfram
FileDate["myfile.txt"]
(* DateObject[{2024, 1, 15, 14, 30, 0}] *)
```

Get creation date:

```wolfram
FileDate["myfile.txt", "Creation"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FileDate.html) for more details.