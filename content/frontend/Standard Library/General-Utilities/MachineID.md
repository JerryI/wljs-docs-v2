---
title: MachineID
---

`MachineID` is an option to `Encode` which specifies the required value of `$MachineID` on the computer that reads the encoded file. If no value is specified, any value of `$MachineID` is allowed on the file-reading computer. A setting for `MachineID` must be a string.

## Examples

```wolfram
Encode["file.m", "encoded.m", MachineID -> "1234-5678"]
(* encodes file with machine restriction *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MachineID.html) for more details.*