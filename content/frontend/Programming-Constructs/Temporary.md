---
title: Temporary
---

`Temporary` is an attribute assigned to symbols which are created as local variables by Module.

## Examples

Create local variables in Module:

```wolfram
Module[{x, y},
  Attributes[x]
]
(* {Temporary} *)
```

Check attributes of a local variable:

```wolfram
Module[{var},
  Print[Attributes[var]];
  var = 10
]
```

Set Temporary attribute manually:

```wolfram
SetAttributes[myVar, Temporary]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Temporary.html) for more details.