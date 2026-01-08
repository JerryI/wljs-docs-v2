---
title: SequenceType
---

`SequenceType[var]` represents a type parameterized by var that refers to a sequence of zero or more types.

## Examples

Define a sequence type:

```wolfram
SequenceType[t]
```

Use in type specifications:

```wolfram
TypeSpecifier[List[SequenceType[Integer]]]
```

Pattern matching with types:

```wolfram
{1, 2, 3} // TypeCheck[List[SequenceType[Integer]]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SequenceType.html) for more details.