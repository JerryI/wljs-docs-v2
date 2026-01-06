---
title: DigitalSignature
---

`DigitalSignature[assoc]` represents a digital signature object.

## Examples

Create and verify a digital signature:

```wolfram
key = GenerateAsymmetricKeyPair[];
sig = GenerateDigitalSignature["message", key["PrivateKey"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DigitalSignature.html) for more details.*