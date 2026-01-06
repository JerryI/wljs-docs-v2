# GenerateFileSignature

`GenerateFileSignature["file", key]` generates a digital signature of file using the specified private key.

- `GenerateFileSignature[{"file", range}, key]` generates a signature of the specified range of bytes.
- `GenerateFileSignature[{{file1, range1}, {file2, range2}, ...}, key]` generates signatures for multiple files.
- `GenerateFileSignature[key]` represents an operator form that can be applied to files.

## Examples

Generate a file signature:

```wolfram
keys = GenerateAsymmetricKeyPair[];
GenerateFileSignature["myfile.txt", keys["PrivateKey"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GenerateFileSignature.html) for more details.*