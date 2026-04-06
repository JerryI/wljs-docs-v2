---
title: Decrypt
---

`Decrypt["password", enc]` attempts to decrypt the encrypted object enc using the specified password.

`Decrypt[keyspec, enc]` attempts to decrypt using the cryptographic key specification keyspec.

`Decrypt[obj]` interactively requests a password with which to try to decrypt obj.

## Examples

Decrypt with a password:

```wolfram
Decrypt["mypassword", encryptedData]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Decrypt.html) for more details.