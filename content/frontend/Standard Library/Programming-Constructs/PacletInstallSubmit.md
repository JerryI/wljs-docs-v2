# PacletInstallSubmit

`PacletInstallSubmit[paclet]` asynchronously installs or updates paclet.

## Examples

```wolfram
PacletInstallSubmit["Wolfram/Chatbook"]
```

```wolfram
task = PacletInstallSubmit["MyPaclet"];
TaskWait[task]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PacletInstallSubmit.html) for more details.*