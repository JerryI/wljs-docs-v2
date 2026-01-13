---
title: ExportAsync
---

`ExportAsync["file.ext", expr]` exports data to a file, converting it to the format corresponding to the file extension and returns `Promise`

`ExportAsync[file, expr, "fmt"]` exports data in the specified format and returns `Promise`

## Examples

Export to a file:

```wolfram
Then[ExportAsync["data.csv", {{1, 2}, {3, 4}}], Function[Null,
    Print["Done!"];
]]
```

See also [Export](./Export)