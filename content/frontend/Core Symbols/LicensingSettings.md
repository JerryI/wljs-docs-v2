# LicensingSettings

`LicensingSettings` is an option for `RemoteBatchSubmit` and related functions to configure licensing for remote kernels.

## Examples

```wolfram
RemoteBatchSubmit[1 + 1, LicensingSettings -> <|"Server" -> "myserver"|>]
```

```wolfram
Options[RemoteBatchSubmit, LicensingSettings]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LicensingSettings.html) for more details.*