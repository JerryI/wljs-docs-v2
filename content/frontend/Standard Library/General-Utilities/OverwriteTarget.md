# OverwriteTarget

`OverwriteTarget` is an option for functions like `CopyFile` that specifies whether to overwrite if target files already exist.

## Examples

```wolfram
CopyFile["source.txt", "dest.txt", OverwriteTarget -> True]
```

```wolfram
CopyFile["file.txt", "backup.txt", OverwriteTarget -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OverwriteTarget.html) for more details.*