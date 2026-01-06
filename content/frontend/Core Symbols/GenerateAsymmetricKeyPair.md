# GenerateAsymmetricKeyPair

`GenerateAsymmetricKeyPair[]` randomly generates a PrivateKey and corresponding PublicKey object for use with public-key cryptographic functions.

- `GenerateAsymmetricKeyPair[type]` randomly generates private and public keys of the specified type.
- `GenerateAsymmetricKeyPair[opts]` randomly generates keys using the specified options.

## Examples

Generate an RSA key pair:

```wolfram
keys = GenerateAsymmetricKeyPair[]
```

Generate an ECC key pair:

```wolfram
GenerateAsymmetricKeyPair["EllipticCurve"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GenerateAsymmetricKeyPair.html) for more details.*