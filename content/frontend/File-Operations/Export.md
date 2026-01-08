---
title: Export
---

`Export["file.ext", expr]` exports data to a file, converting it to the format corresponding to the file extension.

`Export[file, expr, "fmt"]` exports data in the specified format.

## Examples

Export to a file:

```wolfram
Export["data.csv", {{1, 2}, {3, 4}}]
```

Export an image:

```wolfram
Export["plot.png", Plot[Sin[x], {x, 0, 2 Pi}]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Export.html) for more details.