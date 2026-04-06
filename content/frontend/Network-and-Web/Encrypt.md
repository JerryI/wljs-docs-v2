---
title: Encrypt
---

`Encrypt["password", expr]` encrypts expr using the specified password, returning an encrypted object.

`Encrypt[keyspec, expr]` encrypts expr using the cryptographic key specification keyspec.

`Encrypt[expr]` interactively requests a password with which to encrypt expr.

## Examples

Encrypt data with password:

```wolfram
enc = Encrypt["secret", "My private data"]
(* EncryptedObject[...] *)
```

Decrypt it:

```wolfram
Decrypt["secret", enc]
(* "My private data" *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Encrypt.html) for more details.