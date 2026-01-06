---
title: FileFormatProperties
---

`FileFormatProperties["fmt"]` returns an association of properties for the specified format "fmt".

- `FileFormatProperties["fmt","prop"]` returns the property "prop" for the format "fmt".
- `FileFormatProperties["fmt",{prop1,prop2,…}]` returns multiple properties.

## Examples

```wolfram
(* Get all properties of PNG format *)
FileFormatProperties["PNG"]

(* Get a specific property *)
FileFormatProperties["CSV", "Extensions"]

(* Get multiple properties *)
FileFormatProperties["JPEG", {"MIMEType", "Description"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FileFormatProperties.html) for more details.*