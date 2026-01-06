---
title: FunctionDeclaration
---

`FunctionDeclaration[name, typedfun]` declares name to be a typed function suitable for use in a compiler environment.

## Examples

Declare a typed function:

```wolfram
FunctionDeclaration[myAdd, 
  Typed[{Real, Real} -> Real]@Function[{x, y}, x + y]]
```

Use in compiled code:

```wolfram
FunctionCompile[{FunctionDeclaration[myAdd, 
  Typed[{Real, Real} -> Real]@Function[{x, y}, x + y]]},
  Function[{Typed[a, Real]}, myAdd[a, 1.0]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionDeclaration.html) for more details.*