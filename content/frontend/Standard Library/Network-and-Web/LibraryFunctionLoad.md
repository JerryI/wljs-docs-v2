---
title: LibraryFunctionLoad
---

`LibraryFunctionLoad[lib, fun, argtype, rettype]` loads Wolfram Library lib and makes the library function fun available in the Wolfram Language.

## Examples

```wolfram
fun = LibraryFunctionLoad["demo", "addTwo", {Integer, Integer}, Integer]
```

```wolfram
fun[3, 4]
(* 7 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LibraryFunctionLoad.html) for more details.*