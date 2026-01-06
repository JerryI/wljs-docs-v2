---
title: PrivateKey
---

`PrivateKey[assoc]` represents the private part of a key pair for a public-key cryptographic system.

## Examples

Generate a key pair and extract the private key:

```wolfram
keys = GenerateAsymmetricKeyPair[];
privateKey = keys["PrivateKey"]
```

Sign data with a private key:

```wolfram
DigitalSignature[privateKey, "message to sign"]
```

View private key properties:

```wolfram
privateKey["Properties"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PrivateKey.html) for more details.*