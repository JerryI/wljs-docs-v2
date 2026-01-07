---
title: Import
---

`Import[source]` imports data from source, returning a Wolfram Language representation of it.

`Import[source, "fmt"]` interprets the file as the specified format.

## Examples

Import a CSV file:

```wolfram
data = Import["data.csv"]
```

Import specific elements:

```wolfram
Import["image.png", "Data"]
```

Import from URL:

```wolfram
Import["https://example.com/data.json"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Import.html) for more details.*