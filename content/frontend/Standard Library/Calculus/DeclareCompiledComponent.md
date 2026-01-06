---
title: DeclareCompiledComponent
---

`DeclareCompiledComponent["name", decls]` adds declarations decls to compiled component "name".

`DeclareCompiledComponent["name", field -> spec]` adds the specification spec to the specified field in the compiled component "name".

## Examples

```wolfram
DeclareCompiledComponent["MyComponent", 
  "Functions" -> {Function[x, x^2]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeclareCompiledComponent.html) for more details.*