---
title: MIMETypeToFormatList
---

`MIMETypeToFormatList[]` returns lists of file formats corresponding to all registered MIME types.

- `MIMETypeToFormatList[mime]` returns a list of file formats that matches the MIME type mime.

## Examples

Get formats for a specific MIME type:
```wolfram
MIMETypeToFormatList["image/png"]
```

List all registered MIME type mappings:
```wolfram
MIMETypeToFormatList[]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MIMETypeToFormatList.html) for more details.*