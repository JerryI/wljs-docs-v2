---
title: DumpSave
---

`DumpSave["file.mx", symbol]` writes definitions associated with a symbol to a file in internal Wolfram System format.

`DumpSave["file.mx", "context\`"]` writes out definitions associated with all symbols in the specified context.

`DumpSave["file.mx", {obj1, obj2, ...}]` writes out definitions for several symbols or contexts.

## Examples

Save a function definition to a file:

```wolfram
f[x_] := x^2;
DumpSave["myfunction.mx", f]
(* {f} *)
```

Load it back:

```wolfram
Get["myfunction.mx"]
f[3]
(* 9 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DumpSave.html) for more details.