---
title: GenerateSymmetricKey
---

`GenerateSymmetricKey[]` randomly generates a SymmetricKey object suitable for use with cryptographic functions.

- `GenerateSymmetricKey["password"]` derives a SymmetricKey object from the password string given.
- `GenerateSymmetricKey[bytes]` generates a SymmetricKey object using the byte array directly as the key.
- `GenerateSymmetricKey[DerivedKey[...]]` generates a symmetric key from a DerivedKey object.
- `GenerateSymmetricKey[opts]` randomly generates a symmetric key using the specified options.

## Examples

Generate a random symmetric key:

```wolfram
key = GenerateSymmetricKey[]
```

Generate from a password:

```wolfram
GenerateSymmetricKey["mypassword"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GenerateSymmetricKey.html) for more details.*