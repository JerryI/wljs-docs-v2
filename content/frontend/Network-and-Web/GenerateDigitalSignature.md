---
title: GenerateDigitalSignature
---

`GenerateDigitalSignature[expr, key]` generates a digital signature for expr using the specified private key.

- `GenerateDigitalSignature[key]` represents an operator form that can be applied to expressions.

## Examples

Generate a digital signature:

```wolfram
keys = GenerateAsymmetricKeyPair[];
sig = GenerateDigitalSignature["Hello", keys["PrivateKey"]]
```

Verify the signature:

```wolfram
VerifyDigitalSignature[{"Hello", sig}, keys["PublicKey"]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GenerateDigitalSignature.html) for more details.