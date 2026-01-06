---
title: DefineOutputStreamMethod
---

`DefineOutputStreamMethod["name", {fname1 -> function1, fname2 -> function2, ...}]` defines a custom output stream method with the specified name, allowing the Wolfram Language to call the stream functions for opening and writing to an output stream.

## Examples

Define a custom output stream method:

```wolfram
DefineOutputStreamMethod["myMethod", {"Write" -> myWriteFunction}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DefineOutputStreamMethod.html) for more details.*