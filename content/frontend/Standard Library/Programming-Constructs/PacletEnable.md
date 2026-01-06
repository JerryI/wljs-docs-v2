# PacletEnable

`PacletEnable[paclet]` enables a previously disabled paclet.

## Examples

Enable a disabled paclet:

```wolfram
PacletEnable["MyPaclet"]
```

Enable a paclet object:

```wolfram
pac = PacletFind["MyPaclet"][[1]];
PacletEnable[pac]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PacletEnable.html) for more details.*