---
title: Get
---

`<< name` or `Get["name"]` reads in a file, evaluating each expression and returning the last one.

## Examples

Load a package or file:

```wolfram
<< "myfile.m"
```

Get returns the last expression:

```wolfram
Get["definitions.m"]
(* last expression in file *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Get.html) for more details.*