# FileFormatQ

`FileFormatQ[source,"fmt"]` gives True if the file corresponding to source might be imported as format "fmt" and gives False otherwise.

`FileFormatQ[source,{fmt1,fmt2,…}]` gives True if source might be imported as one of "fmti".

## Examples

```wolfram
(* Check if a file is a PNG *)
FileFormatQ["image.png", "PNG"]

(* Check against multiple formats *)
FileFormatQ["data.txt", {"CSV", "TSV", "Text"}]

(* Verify file type *)
FileFormatQ["document.pdf", "PDF"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FileFormatQ.html) for more details.*