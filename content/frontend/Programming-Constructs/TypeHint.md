---
title: TypeHint
---

`TypeHint[expr, type]` represents an expression of a specified type when compiled and gives expr when evaluated.

## Examples

Hint that an expression is a real number:
```wolfram
TypeHint[x + y, "Real64"]
```

Use in compiled code:
```wolfram
FunctionCompile[Function[{x}, TypeHint[x^2, "Integer64"]]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TypeHint.html) for more details.