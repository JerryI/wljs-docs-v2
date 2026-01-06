# ProcessDirectory

`ProcessDirectory` is an option specifying the initial working directory to use when executing a process in functions like `StartProcess` and `RunProcess`.

## Examples

Run a process in a specific directory:

```wolfram
RunProcess[{"ls", "-la"}, ProcessDirectory -> "/tmp"]
```

Start a process with a custom working directory:

```wolfram
StartProcess["python", ProcessDirectory -> "/Users/me/scripts"]
```

Get the current directory of a running process:

```wolfram
proc = StartProcess[$SystemShell];
ProcessInformation[proc, "ProcessDirectory"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ProcessDirectory.html) for more details.*