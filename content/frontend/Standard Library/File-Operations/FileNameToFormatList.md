# FileNameToFormatList

`FileNameToFormatList[]` returns lists of file formats corresponding to all registered file name patterns.

`FileNameToFormatList["file"]` returns a list of file formats that matches the file name "file".

## Examples

```wolfram
FileNameToFormatList["image.png"]
(* {"PNG"} *)
```

```wolfram
FileNameToFormatList["data.csv"]
(* {"CSV"} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FileNameToFormatList.html) for more details.*