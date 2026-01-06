---
title: IncludeMetaInformation
---

`IncludeMetaInformation` is an option for `Import`, `Thumbnail`, and other functions to specify what types of metadata to include.

## Examples

```wolfram
Import["image.jpg", IncludeMetaInformation -> All]
```

```wolfram
Thumbnail[image, IncludeMetaInformation -> {"EXIF"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IncludeMetaInformation.html) for more details.*