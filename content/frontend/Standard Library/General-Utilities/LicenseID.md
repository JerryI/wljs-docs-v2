---
title: LicenseID
---

`LicenseID` is an option to `Encode` which specifies the required value of `$LicenseID` on the computer that reads the encoded file. If no value is specified, any value of `$LicenseID` is allowed on the file-reading computer. A setting for `LicenseID` must be a string.

## Examples

```wolfram
Encode["myfile.m", "encoded.m", LicenseID -> "L3456-7890"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LicenseID.html) for more details.*