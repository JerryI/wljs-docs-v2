---
title: CreateTypeInstance
---

`CreateTypeInstance[type, arg1, arg2, ...]` creates an instance of a type in compiled code.

`CreateTypeInstance[productType, <|field1 -> x1, field2 -> x2, ...|>]` creates an instance of a product type and initializes its fields.

## Examples

Create an instance of a product type:

```wolfram
CreateTypeInstance["MyType", <|"x" -> 1, "y" -> 2|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CreateTypeInstance.html) for more details.*