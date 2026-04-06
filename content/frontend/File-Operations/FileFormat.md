---
title: FileFormat
---

`FileFormat[source]` attempts to determine what Import format could be used to import the file.

`FileFormat[source, {fmt1, fmt2, ...}]` returns the first format that can be used.

## Examples

Detect file format:

```wolfram
FileFormat["image.png"]
(* "PNG" *)
```

Check from multiple formats:

```wolfram
FileFormat["data.csv", {"CSV", "TSV", "JSON"}]
(* "CSV" *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FileFormat.html) for more details.