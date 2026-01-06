---
title: EncryptFile
---

`EncryptFile["password", file]` generates an encrypted version of a file, using the specified password.

`EncryptFile["password", source, target]` generates an encrypted version of source, putting the result in target.

`EncryptFile[keyspec, source, ...]` encrypts using the cryptographic key specification keyspec.

## Examples

Encrypt a file with a password:

```wolfram
EncryptFile["mypassword", "data.txt", "data.enc"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EncryptFile.html) for more details.*