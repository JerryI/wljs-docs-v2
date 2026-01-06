# DefineInputStreamMethod

`DefineInputStreamMethod["name", {fname1 -> function1, fname2 -> function2, ...}]` defines a custom input stream method with the specified name, allowing the Wolfram Language to call the stream functions fnamei for opening and reading from an input stream.

## Examples

Define a custom input stream method:

```wolfram
DefineInputStreamMethod["myMethod", {"Read" -> myReadFunction}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DefineInputStreamMethod.html) for more details.*