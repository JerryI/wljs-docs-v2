---
title: FileHash
---

`FileHash[file]` gives an integer hash code for the contents of the file.

`FileHash[file, "type"]` gives a hash of the specified type (e.g., "MD5", "SHA256").

## Examples

Get default hash:

```wolfram
FileHash["document.txt"]
(* 123456789012345678901234567890 *)
```

Get SHA-256 hash:

```wolfram
FileHash["document.txt", "SHA256"]
```

As hexadecimal string:

```wolfram
FileHash["document.txt", "MD5", "HexString"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FileHash.html) for more details.