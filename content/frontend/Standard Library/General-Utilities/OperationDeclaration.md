---
title: OperationDeclaration
---

`OperationDeclaration[type, op, typedfun]` declares a typed function to be used for the operation op of type.

## Examples

Declare an operation for a custom type:
```wolfram
OperationDeclaration["MyType", Plus, myPlusFunction]
```

Register a compiled function for an operation:
```wolfram
OperationDeclaration[type, Times, compiledMultiply]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OperationDeclaration.html) for more details.*