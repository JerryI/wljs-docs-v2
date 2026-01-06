---
title: GenerateSecuredAuthenticationKey
---

`GenerateSecuredAuthenticationKey[]` generates a new anonymous SecuredAuthenticationKey owned by the current user ID.

- `GenerateSecuredAuthenticationKey["name"]` generates a new SecuredAuthenticationKey with the specified name.
- `GenerateSecuredAuthenticationKey[SecuredAuthenticationKey[...]]` generates new credentials for an existing key.

## Examples

Generate a secured authentication key:

```wolfram
GenerateSecuredAuthenticationKey[]
```

Generate a named key:

```wolfram
GenerateSecuredAuthenticationKey["myApiKey"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GenerateSecuredAuthenticationKey.html) for more details.*