---
title: FilePrint
---

`FilePrint["file"]` prints out the raw textual contents of a file.

`FilePrint["file", n]` prints the first n lines.

`FilePrint["file", -n]` prints the last n lines.

## Examples

Print entire file:

```wolfram
FilePrint["data.txt"]
```

Print first 5 lines:

```wolfram
FilePrint["log.txt", 5]
```

Print lines 10-20:

```wolfram
FilePrint["log.txt", 10 ;; 20]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FilePrint.html) for more details.