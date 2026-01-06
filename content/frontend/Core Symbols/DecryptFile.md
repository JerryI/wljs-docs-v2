# DecryptFile

`DecryptFile["password", file]` generates a decrypted version of a file, using the specified password.

`DecryptFile["password", source, target]` generates a decrypted version of source, putting the result in target.

`DecryptFile[keyspec, source, ...]` decrypts using the cryptographic key specification keyspec.

## Examples

Decrypt a file:

```wolfram
DecryptFile["mypassword", "encrypted.dat", "decrypted.dat"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DecryptFile.html) for more details.*