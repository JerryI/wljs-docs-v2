# Interactive

`Interactive` is an option that specifies whether a function should create a user prompt when mimicking an action that would have created a user prompt if invoked manually.

## Examples

```wolfram
DeleteFile["file.txt", Interactive -> True]
```

```wolfram
CopyFile["source.txt", "dest.txt", Interactive -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Interactive.html) for more details.*