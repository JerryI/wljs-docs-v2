---
title: PublicKey
---

`PublicKey[assoc]` represents the public part of a key pair for a public-key cryptographic system.

- `PublicKey[PrivateKey[...]]` creates a matching public key for the given private key.

Public keys are used for encryption and signature verification in asymmetric cryptography.

## Examples

```wolfram
keys = GenerateAsymmetricKeyPair[];
PublicKey[keys["PrivateKey"]]
```

```wolfram
keys = GenerateAsymmetricKeyPair["RSA"];
keys["PublicKey"]
```

```wolfram
(* Use public key for encryption *)
Encrypt[keys["PublicKey"], "secret message"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PublicKey.html) for more details.*