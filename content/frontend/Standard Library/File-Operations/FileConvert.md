---
title: FileConvert
---

`FileConvert[source->"dest.ext"]` converts the contents of source to the format defined by the extension ext and writes the result to the file dest.ext. 

- `FileConvert[source,"format"]` writes the result to the filename defined by source, but with an extension defined by the specified format.
- `FileConvert[source->"dest.ext",format1->format2]` takes the contents of source to be in the specified format "format1".

## Examples

```wolfram
(* Convert an image to a different format *)
FileConvert["photo.png" -> "photo.jpg"]

(* Convert to PDF *)
FileConvert["document.docx", "PDF"]

(* Specify source format explicitly *)
FileConvert["data.csv" -> "data.xlsx", "CSV" -> "XLSX"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FileConvert.html) for more details.*