# VerifyFileSignature

`VerifyFileSignature[{"file", sig}, key]` verifies the digital signature sig for file using the specified public key.

- `VerifyFileSignature[{"file", range, sig}, key]` verifies the digital signature sig for the specified range of bytes in the file.
- `VerifyFileSignature[{{file1, range1, sig1}, {file2, range2, sig2}, ...}, key]` verifies the digital signatures sigi for each of rangei of bytes in the filei, all using the specified public key.
- `VerifyFileSignature[key]` represents an operator form of VerifyFileSignature that can be applied to files.

## Examples

Verify a file signature:

```wolfram
sig = FileSign["myfile.txt", myPrivateKey];
VerifyFileSignature[{"myfile.txt", sig}, myPublicKey]
```

Verify portion of file:

```wolfram
VerifyFileSignature[{"myfile.txt", {1, 1000}, sig}, publicKey]
```

Operator form:

```wolfram
verifier = VerifyFileSignature[publicKey];
verifier[{"myfile.txt", sig}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VerifyFileSignature.html) for more details.*