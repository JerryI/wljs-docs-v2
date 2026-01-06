# KeepExistingVersion

`KeepExistingVersion` is an option for `PacletInstall` and `PacletInstallSubmit` that specifies whether an older version of a paclet should remain installed when a newer one gets installed.

## Examples

```wolfram
PacletInstall["MyPaclet", KeepExistingVersion -> True]
```

```wolfram
PacletInstall["Package", KeepExistingVersion -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KeepExistingVersion.html) for more details.*