# VerifyDigitalSignature

`VerifyDigitalSignature[{expr, sig}, key]` verifies the digital signature sig for expr using the specified public key.

- `VerifyDigitalSignature[{{expr1, sig1}, {expr2, sig2}, ...}, key]` verifies signatures for multiple expressions.
- `VerifyDigitalSignature[key]` is an operator form suitable for application to {expr, sig} pairs.

## Examples

```wolfram
VerifyDigitalSignature[{message, signature}, publicKey]
```

```wolfram
key = GenerateAsymmetricKeyPair[];
sig = GenerateDigitalSignature["Hello", key["PrivateKey"]];
VerifyDigitalSignature[{"Hello", sig}, key["PublicKey"]]
```

```wolfram
VerifyDigitalSignature[myPublicKey][{data, sig}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VerifyDigitalSignature.html) for more details.*