---
title: MachineName
---

`MachineName` is an option to `Encode` which specifies the required value of `$MachineName` on the computer that reads the encoded file. If no value is specified, any value of `$MachineName` is allowed on the file-reading computer. A setting for `MachineName` must be a string.

## Examples

```wolfram
Encode["file.m", "encoded.m", MachineName -> "mycomputer"]
```

```wolfram
$MachineName
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MachineName.html) for more details.*