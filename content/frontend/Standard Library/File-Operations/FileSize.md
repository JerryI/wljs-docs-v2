# FileSize

`FileSize[file]` gives the size of a file as a quantity.

## Examples

Get the size of a file:

```wolfram
FileSize["example.txt"]
(* Quantity[1024, "Bytes"] *)
```

Convert to megabytes:

```wolfram
UnitConvert[FileSize["largefile.dat"], "Megabytes"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FileSize.html) for more details.*