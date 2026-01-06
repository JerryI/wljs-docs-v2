---
title: MathematicalFunctionData
---

`MathematicalFunctionData[entity,property]` gives data corresponding to property for the mathematical function specified by entity.

`MathematicalFunctionData[entprop,annotation]` gives data corresponding to the given entity or property in the format specified by annotation.

`MathematicalFunctionData[entity,property,annotation]` gives data for the given entity-property pair in the format specified by annotation.

`MathematicalFunctionData[entity,property,{qual1->val1,qual2->val2,…}]` gives data for the given entity-property pair with property qualifiers qual1, qual2, … set to the given values.

`MathematicalFunctionData[entity,property,annotation,{qual1->val1,qual2->val2,…}]` gives data corresponding to the given entity, property and annotation format, with property qualifiers qual1, qual2, … set to the given values.

## Examples

Get properties of a mathematical function:

```wolfram
MathematicalFunctionData[Sin, "ArgumentPattern"]
(* {_} *)
```

List all available properties:

```wolfram
MathematicalFunctionData["Properties"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MathematicalFunctionData.html) for more details.*