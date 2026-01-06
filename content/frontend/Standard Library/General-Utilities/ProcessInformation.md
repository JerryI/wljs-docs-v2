# ProcessInformation

`ProcessInformation[proc]` gives information about an external process proc.

- `ProcessInformation[proc, "prop"]` gives information about the property "prop".

## Examples

Get all process info:

```wolfram
proc = StartProcess[$SystemShell];
ProcessInformation[proc]
```

Get specific property:

```wolfram
ProcessInformation[proc, "ProcessID"]
```

Check running status:

```wolfram
ProcessInformation[proc, "Running"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ProcessInformation.html) for more details.*