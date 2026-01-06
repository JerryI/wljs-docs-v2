# PacletSite

`PacletSite` is an option for `PacletInstall` and `PacletInstallSubmit` that specifies the URL of a paclet site on which to look for the paclet.

## Examples

Install from a specific paclet site:

```wolfram
PacletInstall["PacletName", PacletSite -> "https://example.com/paclets"]
```

Use the default Wolfram paclet site:

```wolfram
PacletInstall["ResourceFunctions"]
```

Check available paclet sites:

```wolfram
PacletSites[]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PacletSite.html) for more details.*