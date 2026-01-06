---
title: PacletInstall
---

`PacletInstall[paclet]` installs or updates paclet.

- `PacletInstall[task]` waits for completion of the task started by `PacletInstallSubmit`.

## Examples

```wolfram
PacletInstall["DocumentationSearch"]
```

```wolfram
PacletInstall["https://example.com/MyPaclet-1.0.paclet"]
```

```wolfram
task = PacletInstallSubmit["PackageName"];
PacletInstall[task]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PacletInstall.html) for more details.*